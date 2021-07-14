console.log("Is this working");


let billAmount = 1;


// get bill total from form input
function enterBill() {
    let billAmount = document.getElementById("billAmountForm").value;
    document.getElementById("bill-amount").innerHTML = billAmount;
    //console.log("bill amount: " + billAmount);
}

console.log("bill amount: " + billAmount);

// function setGratuityPercent() {
//    let percent = 0.20;
// }

// figure out gratuity - 20%
function calculateGratuity() {
    return (billAmount * 0.2);
}

console.log("Gratuity is: " + calculateGratuity());

function totalWithGrat(amount) {
    return calculateGratuity() + amount;
}


console.log("Bill amount: " + totalWithGrat());
console.log("Your total including gratuity is:" + `totalWithGrat(billAmount)`);



// add stuff to the frontend

// Bill 
const billTotal = document.getElementById("bill-amount");
billTotal.innerHTML = billAmount;

// gratuity percent %%% 
// const gratuityPrecent = document.getElementById("gratuity-percent");
// gratuityPrecent.innerHTML = setGratuityPercent();

// gratuity amount $$$ 
const gratuityAmount = document.getElementById("gratuity-amount");
gratuityAmount.innerHTML = calculateGratuity();

//total 
const total = document.getElementById("total");
total.innerHTML = totalWithGrat(billAmount);