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

function increment () {
    return a+b;
}

let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);



// Async Await added
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

//  Random value between two numbers which is taken by User Prompt(user Input)
// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);