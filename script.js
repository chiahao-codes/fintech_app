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

    return 
});

h2Box.addEventListener("keyup", (e) => {
    let h2Children = h2Box.children;
    if (e.key === "Backspace" && h2Children.length>0) {
        //iterate 
        for (let ele of h2Children) {
            if (ele.outerHTML === "<br>") {
                console.log(ele);
            }
        }
    }
})