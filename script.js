let regExp = /[^a-z.A-Z]/;
let h2Box = document.querySelector("header h2");

h2Box.addEventListener("click", () => {
  if (h2Box.innerText === "Enter ticker...") {
    h2Box.innerText = "";
  }
  console.log(h2Box);
  //place cursor at the end of text nodes;
  /**
     * let range = new Range();
    range.setSt
     */

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

  return;
});



/**
 */
