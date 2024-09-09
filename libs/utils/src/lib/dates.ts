export const epochToTime = (epoch: number) => epoch * 1000;

export function dateFromEpoch(timestamp: number) {
  return new Date(epochToTime(timestamp)).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function timeFromEpoch(timestamp: number) {
  return new Date(epochToTime(timestamp)).toLocaleTimeString(undefined, {
    timeStyle: 'short',
  });
}
