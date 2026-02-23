function isVictory({ e, victoryIndex, setClicks, clicks, text, setText }) {
  e.preventDefault();
  e.stopPropagation();

  if (e.target.classList.contains("lost")) return false;
  if (text !== "Keep Searching!") return false;
  if (clicks === 99) alert("Player lost .");
  console.log(e.target.id);

  const index = Number(e.target.id);
  if (index === victoryIndex) {
    victoryIndex = undefined;
    e.target.classList = "von";
    e.target.style.backgroundColor = "rgb(202, 34, 129)";
    setText("Victory !!!");
  } else {
    setClicks((prev) => prev + 1);
    e.target.style.color = "rgb(187, 161, 124)";
    e.target.style.backgroundColor = "rgb(226, 197, 152)";
    e.target.textContent = "X";
    e.target.classList = "lost";
  }
}

export default isVictory;
