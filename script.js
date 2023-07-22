const regExp = /[^a-z.A-Z]/;
const regExpDots = /\.\./;
const h2Box = document.querySelector("header h2");
const h2ChildNodes = h2Box.childNodes;
const divBr = document.querySelector("h2 > div");
const brNodeList = document.querySelectorAll("h2 > br");

h2Box.addEventListener("click", () => {
  if (h2Box.innerText === "Enter ticker...") {
    h2Box.innerText = "";
    }
    //set caret position after text node
    if (h2ChildNodes.length > 0) {
        let selection = window.getSelection();
        selection.setPosition(h2ChildNodes[0], h2ChildNodes[0].length);
    }
  console.log(h2Box);
  return;
});

h2Box.addEventListener("keydown", (e) => {
  if (regExp.test(e.key)) {
    e.preventDefault();
    alert("Invalid entry");
  }
   
  return;
});

h2Box.addEventListener("keyup", (e) => {
  let divBr = document.querySelector("h2 > div");
  let brNodeList = document.querySelectorAll("h2 > br");
  //remove <br>
  if ((e.key === "Backspace" || e.key === "Enter")) {
    if (brNodeList.length > 0) {
      for (let i = 0; i < brNodeList.length; i++) {
        brNodeList[i].remove();
      }
    }
    //Edge Case: chrome browser;
    //remove auto generated divs;
    if (divBr) {
      divBr.remove();
    }
  }
  
  //prevent consecutive dots to be entered.
    if (regExpDots.test(h2Box.innerText) === true) {
        e.preventDefault();
        alert("invalid entry:'.'")
    }

  return;
});

