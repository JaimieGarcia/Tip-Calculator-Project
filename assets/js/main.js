console.log("Is this working");


let billAmount = 100;
let numberOfGuests = 4;
let gratuity = 15;



//! Functions
// get bill total from form input
function enterBill() {
    let billAmount = document.getElementById("billAmountForm").value;
    document.getElementById("bill-amount").innerHTML = billAmount;
    //console.log("bill amount: " + billAmount);
}

function setGratuityPercent() {
    return (gratuity / 100)
}

function gratuityPercent() {
    return (setGratuityPercent() * 100);
}


// figure out gratuity - 20%
function calculateGratuity() {
    return (billAmount * setGratuityPercent());
}


function totalWithGrat(amount) {
    return calculateGratuity() + amount;
}


//! logging

console.log("bill amount: " + billAmount);
console.log("Thar be " + numberOfGuests + " guests");
console.log("Gratuity(%) is: " + gratuityPercent() + "%");
console.log("Gratuity(math stuff) is: " + setGratuityPercent());
console.log("Gratuity($) is: $" + calculateGratuity());
console.log("Bill amount: " + totalWithGrat());
console.log("Your total including gratuity is:" + `totalWithGrat(billAmount)`);



//! add stuff to the frontend

// Bill 
const billTotal = document.getElementById("bill-amount");
billTotal.innerHTML = billAmount;

// gratuity percent %%% 
//const gratuityPrecent = document.getElementById("gratuity-percent");
//gratuityPrecent.innerHTML = setGratuityPercent();

// gratuity amount $$$ 
const gratuityAmount = document.getElementById("gratuity-amount");
gratuityAmount.innerHTML = calculateGratuity();

//total 
const total = document.getElementById("total");
total.innerHTML = totalWithGrat(billAmount);