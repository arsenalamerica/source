export function shite(text: string) {
  const shite = text
    .replace('Tottenham', 'Totnum')
    .replace('tottenham', 'totnum')
    .replace('hotspur', 'shitspur')
    .replace('Hotspur', 'Shitspur')
    .replace('(London)', '')
    .trim();

  return shite;
}
