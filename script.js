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
    let arrCopy = Array.from(h2Children);

    if (regExp.test(e.key)) {
        e.preventDefault();
        alert("Invalid entry")
    }

    if (arrCopy.length > 0) {
        for (let i of arrCopy) {
            if (i.tagName === "BR") {
                let index = arrCopy.indexOf(i);
                arrCopy.splice(index, 1);
            }
        }
        h2Children = arrCopy;
    }
    

    return h2Children;
});
