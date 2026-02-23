
export function victoryNumber() {
  const min = 0;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function createArr() {
  const size = 100;
  const arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push({text:'',class:''});
  }
  return arr;
}
