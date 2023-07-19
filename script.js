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
    if (e.key == "Backspace" || e.key === "Enter") {
        let h2ChildrenList = h2Box.children;
        for (let ele of h2ChildrenList) {
            if (ele.outerHTML = "<br>") {
                ele.remove();
            }
        }
        console.log(h2Box)
    }
    return
})

/**
 * let brElem = document.querySelector("h2 br");
 *   if (e.key == "Backspace" && brElement || e.key === "Enter" && brElement) {
        brElement.remove();
        console.log(h2Box)
    }
 */