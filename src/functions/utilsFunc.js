export function victoryNumber() {
  const min = 0;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
