import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto">
        <div className="my-4">
          <h1 className="text-5xl my-8 font-mono">Fastly Streaming Test</h1>
          <p>
            This is a simple test to confirm that streaming works with Fastly
            Compute. Go to the stream link below to see the streaming in action.
          </p>
        </div>
        <ol>
          <li>
            <Link className="hover:underline" href="/stream">
              Streaming example with Fastly Compute
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline"
              href="https://github.com/devdumpling/fastly-stream-test"
            >
              Source Code
            </Link>
          </li>
        </ol>
      </section>
    </main>
  );
}
