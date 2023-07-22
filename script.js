const regExp = /[^a-z.A-Z]/;
const regExpDots = /\.\./;
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
  //prevent consecutive dots to be entered.
  if (regExpDots.test(h2Box.innerText) === true) {
    e.preventDefault();
    alert("invalid entry:'.'");
  }
  
  return;
});

h2Box.addEventListener("keyup", (e) => {
  let h2Children = h2Box.children;
  //remove <br> or div;
  if ((e.key === "Backspace" || e.key === "Enter")) {
    if (h2Children.length > 0) {
      for (let i = 0; i < h2Children.length; i++) {
        h2Children[i].remove();
      }
    }
  }

  return;
});

