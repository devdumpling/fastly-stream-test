import React from 'react';
import { getTime } from './getTime';

interface TimeProps {
  renderStart?: number;
  delay?: number;
}

// Fetch and render the time from the time API after an optional delay
async function Time({ delay }: TimeProps) {
  // Record the full time when the component starts rendering
  const renderDate = new Date();
  const renderStart = renderDate.getTime();

  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  const timeFromApi = await getTime();

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6 min-h-32">
      <div>
        <h1>Time API </h1>
        <pre>dateTime: {timeFromApi.dateTime}</pre>
      </div>
      <div>
        <h1>Render </h1>
        <pre>renderTime: {Date.now() - renderStart}ms</pre>
        <pre>renderStartTime: {renderDate.getTime()}</pre>
      </div>
    </div>
  );
}

export default Time;
