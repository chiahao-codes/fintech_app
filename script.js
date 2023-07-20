const regExp = /[^a-z.A-Z]/;
const regExpDots = /..\b/;
const h2Box = document.querySelector("header h2");
const h2ChildNodes = h2Box.childNodes;

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
  //remove <br>
    let brNodeList = document.querySelectorAll("h2 > br");
    let divBr = document.querySelector("h2 > div");

    if ((e.key == "Backspace" && brNodeList.length > 0 || e.key == "Enter" && brNodeList.length>0)) {
      for (let i = 0; i < brNodeList.length; i++) {
        brNodeList[i].remove();
        }
        console.log(h2Box)
    }

    //Edge Case: chrome browser
    if (divBr) {
        divBr.remove()
    }

    if (regExpDots.test(h2Box.innerText)) {
        e.preventDefault();
        alert("invalid entry:'.'")
    }

  return;
});

