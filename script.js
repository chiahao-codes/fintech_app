let regExp = /[^a-z.A-Z]/;

let h2Box = document.querySelector("header h2");
console.log(h2Box);

h2Box.addEventListener("click", () => {
    if (h2Box.innerText === "Enter ticker...") {
        h2Box.innerText = "";
    }
    return
})

h2Box.addEventListener("keydown", (e) => {
    let h2Children = h2Box.children;
    
    if (regExp.test(e.key)) {
        e.preventDefault();
        alert("Invalid entry")
    }

    if (h2Children.length > 0) {
        for (let i of h2Children) {
            console.log(i);
            if (i.outerHTML == "<br>") {
                let index = h2Children.indexOf(i);
                h2Children.splice(index, 1);
            }
        }
       
        console.log("<br> deleted...")
    }
    

    return h2Children;
});
