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
        return; 
});

//mozilla hack for getting rid of <br>;
h2Box.addEventListener("keyup", (e) => {
    //remove <br>
    let brNodeList = document.querySelectorAll("h2 > br");
    
    if (e.key == "Backspace" && brNodeList.length>0||e.key == "Enter" && brNodeList.length > 0) {
        brNodeList.forEach((ele) => {
            if (ele.outerHTML === "<br>") {
                ele.remove()
            }
        })
        console.log(h2Box)
    }
        return;
})

/**
 * let brElement = document.querySelector("h2 br");
 *  if ( brElement) {
    brElement.remove();
    console.log(h2Box);
    }
 * let brElem = document.querySelector("h2 br");
 *   if (e.key == "Backspace" && brElement || e.key === "Enter" && brElement) {
        brElement.remove();
        console.log(h2Box)
    }
 */