function isVictory({
  arr,
  setArr,
  index,
  victoryIndex,
  setClicks,
  clicks,
  text,
  setText,
}) {
  const newArr = [...arr];
  if (newArr[index].text) return;
  if (text !== "Keep Searching!") return;
  if (clicks === 99) alert("Player lost .");

  console.log(index);

  if (index === victoryIndex) {
    setText("Victory !!!");
    newArr[index] = { class: "von" };
  } else {
    setClicks((prev) => prev + 1);
    newArr[index] = { class: "lost", text: "X" };
  }
  setArr(newArr);
}

export default isVictory;
