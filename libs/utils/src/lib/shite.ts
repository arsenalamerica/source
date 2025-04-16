export function shite(text: string) {
  if (!text) {
    return '';
  }

  const shite = text
    .replace('Tottenham', 'Totnum')
    .replace('tottenham', 'totnum')
    .replace('hotspur', 'shitspur')
    .replace('Hotspur', 'Shitspur')
    .replace('(London)', '')
    .trim();

  return shite;
}
