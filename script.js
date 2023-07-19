let regExp = /[^a-z.A-Z]/;
let h2Box = document.querySelector("header h2");

h2Box.addEventListener("click", () => {
  if (h2Box.innerText === "Enter ticker...") {
    h2Box.innerText = "";
  }
  return;
});

h2Box.addEventListener("keydown", (e) => {
  let h2Children = h2Box.children;
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
    }
    
    if (divBr) {
        divBr.remove()
    }

  return;
});

//mozilla hack for getting rid of <br>;

/**
 *   
 * 
 *  brNodeList.forEach((ele) => {
      if (ele.outerHTML === "<br>") {
        ele.remove();
      }
    });
 */
