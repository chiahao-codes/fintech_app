const regExp = /[^a-z.A-Z]/;
const regExpDots = /\.\./;
const h2Box = document.querySelector("header>h2");



h2Box.addEventListener("click", () => {
  const h2ChildNodes = h2Box.childNodes;
  if (h2Box.innerText === "Enter ticker...") {
    h2Box.innerText = "";
    }
    //set caret position after text node
    if (h2ChildNodes.length > 0) {
        let selection = window.getSelection();
        selection.setPosition(h2ChildNodes[0], h2ChildNodes[0].length);
    }
  
  return;
});

h2Box.addEventListener("keydown", (e) => {
  let textString = h2Box.innerText;
  if (textString.length > 12) {
    e.preventDefault();
    alert("Characters exceeded")
  }
  if (regExp.test(e.key) || e.key === "Enter" && h2Box.innerText === "") {
    e.preventDefault();
    alert("Invalid entry");
  }

  return;
});

h2Box.addEventListener("keyup", (e) => {
  //hack needed for removing auto-generated divs in mozilla vs. chrome;
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
  //prevent consecutive dots to be entered.
  if (regExpDots.test(h2Box.innerText) === true) {
    e.preventDefault();
    alert("invalid entry:'.'");
  }
  return;
});



/**
 * //const h2Children = h2Box.children;
  let divBr = document.querySelector("h2 div");
  let br = document.querySelector("br");
  //remove <br> or div;
  if (e.key === "Backspace" || e.key === "Enter") {
    if (br) {
  console.log(br)
  br.remove();
    }
    if (divBr) {
      divBr.remove();
    }
  }
 */

