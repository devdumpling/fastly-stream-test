/// <reference types="@fastly/js-compute" />

const handler = async (event) => {
  // Get the request from the client.
  const req = event.request;

  // hits our fastly VCL backend, which forwards to our origin
  const beresp = await fetch(req, {
    backend: "fastly_origin",
  });

  // add a header so we know we're hitting the edge
  beresp.headers.append("X-Dev-Test", "hello");

  return beresp;
};

addEventListener("fetch", (event) => event.respondWith(handler(event)));
