
export function victoryNumber() {
  const min = 0;
  const max = 35;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function createArr() {
  const size = 36;
  const arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push({text:'',class:''});
  }
  return arr;
}
export function createcolor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function reasetState({ setMainColor,setVictoryIndex, setClicks, setText, setArr }) {
setMainColor(createcolor())
    setVictoryIndex(victoryNumber());
    setClicks(0);
    setText("Keep Searching!");
    setArr(createArr());
}