//! GET USER INPUTS FOR TOTAL, # OF GUESTS, TIP %

// Bill Total Input
let totalInputBox = document.getElementById('billTotalInput');
// Number of guests input
let guestInputBox = document.getElementById('numOfGuestsInput');
//  Tip Button input
let tipButtonResult = document.getElementById('tipPercentOutput');
document.getElementById('tipPercentOutput').innerHTML = "15%";

// outputs
let totalTipBox = document.getElementById('tipAmountOutput');

let totalOutputBox = document.getElementById('totalBillWithTip');




var totalBillResults;
var numberOfGuestsResults = 1;
var tipValue = 0.15;
var tipResults = 0.15;


//! Functions for changiung the dom elements

//* total bill 
totalInputBox.onchange = () => {

    document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;
    totalBillResults = totalInputBox.value;
}

//* Number of guests 

guestInputBox.onchange = () => {
    document.getElementById('numOfGuestsOutput').innerHTML = guestInputBox.value;
    // if there is an value in the input 
    if (guestInputBox.value <= 1) {
        //numberOfGuestsResults = 1;
        document.getElementById('tip-ammount-label').innerHTML = "Tip Amount:";
        console.log("should be just 1 guest: " + numberOfGuestsResults);

    }
    //if more than 1
    else {
        //guestInputBox = 1;
        numberOfGuestsResults = guestInputBox.value;
        document.getElementById('tip-ammount-label').innerHTML = "Tip Amount Per Person:";
        console.log("should be more than 1: " + numberOfGuestsResults);
        splitTheBill()
    }

}


//* Tip Buttons
document.body.addEventListener('change', (e) => {
    let target = e.target;
    let message = "15%";
    var tipResults;
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
    tipResults = tipValue;
    mathTime()
    addTheTip()
    if (guestInputBox.value <= 1) {
        addTheTip()
        mathTime()
    } else {
        mathTime()
        splitTheBill()
    }

    document.getElementById('tipPercentOutput').innerHTML = message;

});


//Todo calculate tip amount  100 * 0.15
function mathTime() {
    totalTipBox = document.getElementById('tipAmountOutput');
    //console.log("MATH: Tip $" + totalBillResults * tipValue);
    tipResults = totalBillResults * tipValue
    if (guestInputBox.value <= 1) {
        document.getElementById('tipAmountOutput').innerHTML = "$" + totalBillResults * tipValue;
        document.getElementById('total-with-tip-label').innerHTML = "Total Bill with Tip:";
    } else {
        splitTotal = totalBillResults / numberOfGuestsResults;
        console.log("Split Total By " + numberOfGuestsResults + "= " + totalBillResults / numberOfGuestsResults);
        //document.getElementById('tipAmountOutput').innerHTML = "$" + totalBillResults / numberOfGuestsResults;
        document.getElementById('total-with-tip-label').innerHTML = "Total Bill with Tip Split by " + numberOfGuestsResults + ":";
        console.log("1 " + splitTotal);
        console.log("2 " + splitTip);
        console.log("MATH " + splitTotal + splitTip);
        document.getElementById('totalBillWithTip').innerHTML = "$" + (parseFloat(splitTotal) + parseFloat(splitTip));
    }
    //console.log("calculate tip amount");
}


//Todo calculate total + tip 100 + 15 = 115
function addTheTip() {
    total = parseFloat(totalBillResults) + parseFloat(tipResults)
    document.getElementById('totalBillWithTip').innerHTML = "$" + total;
}


//Todo calculate tip if there is more than 1 person tip / people 15 / 2 = 7.50
function splitTheBill() {
    tip = parseFloat(tipResults);
    splitTip = tip / numberOfGuestsResults;
    // calculation stuff
    console.log("calculate  tip  / num of people ");
    console.log("Tip Before " + tip);
    console.log("Tip Split by " + numberOfGuestsResults + ": " + splitTip);
    console.log("Tip Per Person " + splitTip);

    //change the tip output
    document.getElementById('tip-ammount-label').innerHTML = "Tip Amount Per Person:";
    document.getElementById('tipAmountOutput').innerHTML = "$" + splitTip;

}


// add stuff for when the console is open 