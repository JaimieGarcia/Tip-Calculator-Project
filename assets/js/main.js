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
    //var totalBillResults;
    document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;
    totalBillResults = totalInputBox.value;
    console.log("local var totalBillResults " + totalBillResults);
    //updateStuff()

}
//console.log("global var totalBillResults " + totalBillResults);




//* Number of guests 

guestInputBox.onchange = () => {
    document.getElementById('numOfGuestsOutput').innerHTML = guestInputBox.value;
    // if there is an value in the input 
    if (guestInputBox.value === "") {
        numberOfGuestsResults = guestInputBox.value;

    }
    //if its blank use this 
    else {
        //guestInputBox = 1;
        //numberOfGuests = 1;
    }


    //updateStuff()
    console.log("Number of guests: " + guestInputBox.value);
    console.log("local var numberOfGuests " + numberOfGuestsResults);
}
//console.log("local var numberOfGuests " + numberOfGuests);

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
    updateStuff()
    mathTime()
    addTheTip()
    document.getElementById('tipPercentOutput').innerHTML = message;
    console.log("test3 message " + message);
    console.log("var tipValue " + tipValue);
    console.log("var tipResults " + tipResults);
});


function updateStuff() {

    //Todo Log Results from the Total, Guests and Tip inputs
    console.log("Bill Results " + totalBillResults);
    console.log("Guest Results " + numberOfGuestsResults);
    console.log("Tip Results " + tipResults);


}




//Todo Log Results from the Total, Guests and Tip inputs
//console.log("Bill Results " + totalBillResults);
//console.log("Guest Results " + numberOfGuestsResults);
//console.log("Tip Results " + tipResults);





//Todo calculate tip amount  100 * 0.15
function mathTime() {
    console.log("var totalBillResults " + totalBillResults);
    console.log("var tipResults " + tipResults);
    totalTipBox = document.getElementById('tipAmountOutput');
    console.log("MATH: Tip $" + totalBillResults * tipValue);
    tipResults = totalBillResults * tipValue
    document.getElementById('tipAmountOutput').innerHTML = "$" + totalBillResults * tipValue;
    //console.log("calculate tip amount");
}





//Todo calculate total + tip 100 + 15 = 115
function addTheTip() {
    console.log("calculate total + tip");
    console.log(totalBillResults);
    console.log("+");
    console.log(tipResults);
    console.log("MATH: Total + Tip" + '\n' + parseFloat(totalBillResults) + parseFloat(tipResults));
    total = parseFloat(totalBillResults) + parseFloat(tipResults)
    document.getElementById('totalBillWithTip').innerHTML = "$" + total;
}

//Todo calculate tip if there is more than 1 person tip / people 15 / 2 = 7.50