import { Suspense } from 'react';
import Loader from './loader';
import Time from './time';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function StreamingPage() {
  return (
    <main className="p-4 md:p-6 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6">
        <div className="rounded-lg border shadow-black">
          <Suspense fallback={<Loader />}>
            <Time />
          </Suspense>
        </div>
        <div className="rounded-lg border shadow-black">
          <Suspense fallback={<Loader />}>
            <Time delay={1000} />
          </Suspense>
        </div>
        <div className="rounded-lg border shadow-black">
          <Suspense fallback={<Loader />}>
            <Time delay={2000} />
          </Suspense>
        </div>
        <div className="rounded-lg border shadow-black">
          <Suspense fallback={<Loader />}>
            <Time delay={3000} />
          </Suspense>
        </div>
        <div className="rounded-lg border shadow-black">
          <Suspense fallback={<Loader />}>
            <Time delay={4000} />
          </Suspense>
        </div>
        <div className="rounded-lg border shadow-black">
          <Suspense fallback={<Loader />}>
            <Time delay={5000} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
