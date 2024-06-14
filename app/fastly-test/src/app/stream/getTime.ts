const CURRENT_TIME_URL = 'https://timeapi.io/api/Time/current/zone?timeZone=America/New_York';

export async function getTime() {
  const { signal } = new AbortController();

  const res = await fetch(CURRENT_TIME_URL, { cache: 'no-store', signal });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
