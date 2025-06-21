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


// program to convert celsius to fahrenheit
// ask the celsius value to the user 
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);