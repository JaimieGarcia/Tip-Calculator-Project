console.log("Is this working");

//these shoudl be the user inputs for the front end form stuff
let billAmount = 300;
let numberOfGuests = 8;
let gratuity = 20;


//! Functions
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



//! add stuff to the frontend

// Bill 
//const billTotal = document.getElementById("bill-amount");
//billTotal.innerHTML = billAmount;

// gratuity percent %%% 
//const tipPrecentage = document.getElementById("gratuity-percent");
//tipPrecentage.innerHTML = gratuityPercent();

// gratuity amount $$$ 
const gratuityAmount = document.getElementById("tipAmount");
gratuityAmount.innerHTML = calculateGratuity();

//total with tip
const total = document.getElementById("totalBillWithTip");
total.innerHTML = totalWithGrat(billAmount);

//total with tip split between party
//const split = document.getElementById("guest-split");
//split.innerHTML = peopleSplit();