let regExp = /[^a-z.A-Z]/;
let h2Box = document.querySelector("header h2");

h2Box.addEventListener("click", () => {
    if (h2Box.innerText === "Enter ticker...") {
        h2Box.innerText = "";
    }
    return
})

h2Box.addEventListener("keydown", (e) => {
    if (regExp.test(e.key)) {
        e.preventDefault();
        alert("Invalid entry")
    }
    let h2Children = h2Box.children;
    if (e.key === "Enter" && h2Children.length > 0) {
      for (let i = 0; i < h2Children.length; i++) {
        let curr = h2Children[i];
        if (curr.outerHTML === "<br>") {
          curr.remove(i);
        }
      }
      console.log(h2Children);
    }
        return; 
});

//mozilla hack for getting rid of <br>;
h2Box.addEventListener("keyup", (e) => {
    //remove <br>
    let brElement = document.querySelector("h2 br");
    
  if ((e.key == "Backspace" && brElement)) {
    brElement.remove();
    console.log(h2Box);
    }
    return;
})

/**
 * let brElem = document.querySelector("h2 br");
 *   if (e.key == "Backspace" && brElement || e.key === "Enter" && brElement) {
        brElement.remove();
        console.log(h2Box)
    }
 */