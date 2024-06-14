# fastly-stream-test

A basic, most minimal example of a Fastly compute/VCL/Next stack.

## Layers

### Backend

The backend origin is a Next.js app bootstrapped with `create-next-app`. You can see the code in [/app/fastly-test](./app/fastly-test/).

- https://fastly-stream-test.vercel.app/
- https://fastly-stream-test.vercel.app/stream

### VCL

On top of that there is a Fastly VCL service. All I did was click "Create service" in the Fastly web UI and point the host to the above vercel hostname, then added an example domain. No additional configuration. 

- https://dev-wells.global.ssl.fastly.net/
- https://dev-wells.global.ssl.fastly.net/stream

### Compute

Finally, there is a Fastly Compute@Edge service. 

You can see the code for that in [/grossly-natural-muskrat.edgecompute.app](./grossly-natural-muskrat.edgecompute.app/).

- https://grossly-natural-muskrat.edgecompute.app/
- https://grossly-natural-muskrat.edgecompute.app/stream

In the configuration, I added a host that points to the VCL service, with a `name` as `fastly_origin`. 

The compute is about as minimal as it gets, simply forwards the request to VCL, then adds a header:

```js
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
```

## Usage

Use the above links to test. If you need to build, you'll need to get my API key and set up the Fastly CLI. Then simply from within the compute directory, run:

```sh
fastly compute publish
```
