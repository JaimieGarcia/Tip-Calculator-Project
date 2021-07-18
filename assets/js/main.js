//! GET USER INPUTS FOR TOTAL, # OF GUESTS, TIP %

// Bill Total Input
let totalInputBox = document.getElementById('billTotalInput');
// Number of guests input
let guestInputBox = document.getElementById('numOfGuestsInput');
//  Tip Button input
let tipButtonResult = document.getElementById('tipPercentOutput');
document.getElementById('tipPercentOutput').innerHTML = "15%";


var billAmount;
var numberOfGuests;
var tipValue;


// total bill 
totalInputBox.onchange = () => {
    document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;
    console.log(totalInputBox.value);
    globalThis.billAmount = totalInputBox.value;
}

console.log("global billAmount" + billAmount);

// Number of guests 

numberOfGuests = 1;
console.log("test" + numberOfGuests);

guestInputBox.onchange = () => {
    document.getElementById('numOfGuestsOutput').innerHTML = guestInputBox.value;
    // if there is an value in the input 
    if (guestInputBox.value === "") {
        numberOfGuests = guestInputBox.value;
    }
    //if its blank use this 
    else {
        guestInputBox = 1;
        numberOfGuests = 1;
    }

    console.log("Number of guests: " + guestInputBox.value);
    console.log("test2 " + numberOfGuests);
}

// Tip Buttons


document.body.addEventListener('change', (e) => {
    let target = e.target;
    let message = "15%";
    switch (target.id) {
        case '20per':
            message = '20%';
            tipValue = 0.20;
            break;
        case '15per':
            message = '15%';
            tipValue = 0.15;
            break;
        case '10per':
            message = '10%';
            tipValue = 0.10;
            break;
    }

    document.getElementById('tipPercentOutput').innerHTML = message;
    console.log("test3 message " + message);
});

console.log("test3 value " + tipValue);

//Todo calculate tip amount  100 * 0.15
let totalTipBox = document.getElementById('tipAmountOutput');
document.getElementById('tipAmountOutput').innerHTML = "$" + billAmount * tipValue;


//Todo calculate total + tip 100 + 15
let totalOutputBox = document.getElementById('totalBillWithTip');
document.getElementById('totalBillWithTip').innerHTML = 100 + tipValue;

//Todo calculate tip if there is more than 1 person