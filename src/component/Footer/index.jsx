import React from "react";

function index() {
  const clicks = 12;
  const textToShow = "Keep Searching!";
  return (
    <footer>
      <section>Click:{clicks}</section>
      <p>{textToShow}</p>
    </footer>
  );
}

export default index;
