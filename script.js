const regExp = /[a-zA-Z]/;
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
  if (textString.length >= 5) {
    if(e.key !== "Backspace" && e.key !== "Enter")
         e.preventDefault();
         alert("Character amount exceeded");
  }

  if (regExp.test(e.key) === false) {
    if (e.key !== "Backspace" || e.key !== "Enter") {
       e.preventDefault();
       alert("Invalid entry");
    }
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

  return;
});



/**/

