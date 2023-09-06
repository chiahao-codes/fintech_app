const regExp = /[a-zA-Z]/;
const h2Box = document.querySelector("header>h2");

h2Box.addEventListener("focusin", () => {
  const h2ChildNodes = h2Box.childNodes;
  const selection = window.getSelection();
  if (h2Box.innerText === "Enter ticker...") {
    h2Box.innerText = "";
  }
  //set caret position after text node

  if (h2ChildNodes.length > 0) {
    console.log(h2ChildNodes);
    selection.setPosition(h2ChildNodes[0], h2ChildNodes[0].length);
  } else {
    selection.setPosition(h2Box, 0);
  }

  return;
});

h2Box.addEventListener("keydown", (e) => {
  let textString = h2Box.innerText;
  if (textString.length >= 5 && e.key !== "Backspace" && e.key !== "Enter") {
    e.preventDefault();
    alert("Character amount exceeded");
  }

  //prevent navigation keys;
  if (textString.length > 0) {
    let navKeys = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowDown",
      "ArrowUp",
      "Left",
      "Right",
      "Up",
      "Down",
      "Home",
      "End",
      "Del",
      "Delete",
      "PageUp",
      "PageDown",
      "Insert",
    ];
    for (const ele of navKeys) {
      if (e.key === ele) {
        e.preventDefault();
        alert("Invalid entry");
      }
    }
  }

  if (textString === "" && e.key === "Enter") {
    e.preventDefault();
    alert("enter a valid ticker");
  }

  //prevent non-letters
  //Allow Backspace, Enter keys;
  //Note: navigation keys are failing the regexp test;
  if (regExp.test(e.key) === false) {
    if (e.key !== "Backspace" && e.key !== "Enter") {
      e.preventDefault();
      alert("Invalid entry");
    }
  }

  return;
});

h2Box.addEventListener("keyup", (e) => {
  //needed for removing auto-generated divs in mozilla vs. chrome;
  let divBr = document.querySelector("h2 div");
  let brList = document.querySelectorAll("h2 br");
  if (e.key === "Backspace" || e.key === "Enter") {
    if (brList.length > 0) {
      for (br of brList) {
        br.remove();
      }
    }
    if (divBr) {
      divBr.remove();
    }
  }

  return;
});
