import Link from "next/link";

export default function Home() {
  return (
    <main>
      A quick fastly streaming test
      <Link href="/stream">
        Go here to see the stream with optimizely's js SDK
      </Link>
      <Link href="/stream/rust">
        Go here for the rust version
      </Link>
    </main>
  );
}
