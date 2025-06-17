const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const countText = document.getElementById("count");

let countVal = parseInt(countText.innerText);

let a = 2;
let b = 4;

incBtn.addEventListener("click",(e)=> {
    countText.innerText = ++countVal;
});

decBtn.addEventListener("click", (e)=> {
    countText.innerText = --countVal;
});

// decrement added

function decrement () {
    return b-a;
}
