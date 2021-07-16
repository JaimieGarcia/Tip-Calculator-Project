console.log("Is this working");

//! these shoudl be the user inputs for the front end form stuff
let numberOfGuests = 1;
let gratuity = 20;
let billAmount = 100;
//let billAmount = document.getElementById("billTotal").value;
let tipPerButton = 20;




/* event listener */
// TODO: Got this working in a codepen it aint workign herer
// https://codepen.io/BorkStick/pen/PomprJJ

document.getElementsByName("Guests")[0].addEventListener('keyup', doThing);

/* function */
function doThing() {
    const guests = document.getElementById("guests");
    guests.innerHTML = this.value;
    let numberOfGuests = this.value;
}




//! Functions
// gets the total from the input displays it on the page
// imedietly resets 
const input = document.querySelector('input');
const totalBillWithTip = document.getElementById('totalBillWithTip');

input.addEventListener('change', updateValue);

function updateValue(e) {
    totalBillWithTip.textContent = e.target.value;
}


var form = document.getElementById("billTotal");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);


function eventTest(event, inputText) {
    event.preventDefault();
}

// get bill total from form input
function enterBill() {
    let billAmount = document.getElementById("billAmountForm").value;
    document.getElementById("bill-amount").innerHTML = billAmount;
    //console.log("bill amount: " + billAmount);
}

// use the tip % and turn it into a decimal eg 20% = 0.2
function setGratuityDecimal() {
    return (gratuity / 100)
}

function gratuityPercent() {
    return (setGratuityDecimal() * 100);
}


// figure out gratuity bill total x %decimal 
function calculateGratuity() {
    return (billAmount * setGratuityDecimal());
}

// 
function totalWithGrat(amount) {
    return calculateGratuity() + amount;
}

// split the total with tip by the 
function peopleSplit() {
    return (totalWithGrat(billAmount) / numberOfGuests);
}


//! logging

console.log("bill amount: " + billAmount);
console.log("Thar be " + numberOfGuests + " guests");
console.log("Gratuity(%) is: " + gratuityPercent() + "%");
console.log("Gratuity(math stuff) is: " + setGratuityDecimal());
console.log("Gratuity($) is: $" + calculateGratuity());
console.log("Your total including gratuity is:" + totalWithGrat(billAmount));
console.log("Split " + numberOfGuests + " ways is:" + peopleSplit());
console.log(tipPerButton);


//! add stuff to the frontend


// Bill 
//const billTotal = document.getElementById("bill-amount");
//billTotal.innerHTML = billAmount;

// gratuity percent %%% 
//const tipPrecentage = document.getElementById("gratuity-percent");
//tipPrecentage.innerHTML = gratuityPercent();

// gratuity amount $$$ 
//const gratuityAmount = document.getElementById("tipAmount");
//gratuityAmount.innerHTML = calculateGratuity();

//total with tip
//const total = document.getElementById("totalBillWithTip");
//total.innerHTML = totalWithGrat(billAmount);





//total with tip split between party
//const split = document.getElementById("guest-split");
//split.innerHTML = peopleSplit();