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


var totalBillResults;
var numberOfGuestsResults;
var tipResults;


//! Functions for changiung the dom elements

//* total bill 
totalInputBox.onchange = () => {
    var totalBillResults;
    document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;
    totalBillResults = totalInputBox.value;
    console.log("local var totalBillResults " + totalBillResults);
    updateStuff()

}
//console.log("global var totalBillResults " + totalBillResults);




//* Number of guests 
var numberOfGuests = 1;

guestInputBox.onchange = () => {
    document.getElementById('numOfGuestsOutput').innerHTML = guestInputBox.value;
    var numberOfGuestsResults;
    // if there is an value in the input 
    if (guestInputBox.value === "") {
        guestInputBox = 1;
        numberOfGuests = 1;
    }
    //if its blank use this 
    else {
        guestInputBox = 1;
        numberOfGuests = guestInputBox.value;

    }

    numberOfGuestsResults = numberOfGuests;
    updateStuff()
    console.log("Number of guests: " + guestInputBox.value);
    console.log("local var numberOfGuests " + numberOfGuests);
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
    updateStuff()
    document.getElementById('tipPercentOutput').innerHTML = message;
    console.log("test3 message " + message);
    var tipResults = tipValue;
    console.log("var tipResults " + tipResults);
});


function updateStuff() {

    //Todo Log Results from the Total, Guests and Tip inputs
    console.log("Bill Results " + totalBillResults);
    console.log("Guest Results " + numberOfGuestsResults);
    console.log("Tip Results " + tipResults, '\n');


}




//Todo Log Results from the Total, Guests and Tip inputs
//console.log("Bill Results " + totalBillResults);
//console.log("Guest Results " + numberOfGuestsResults);
//console.log("Tip Results " + tipResults);




//TODO IT AINT WORRKIN HERE
//Todo calculate tip amount  100 * 0.15
let totalTipBox = document.getElementById('tipAmountOutput');
document.getElementById('tipAmountOutput').innerHTML = "$" + totalBillResults * tipResults;
//console.log("calculate tip amount");
//console.log(window.totalBillResults * window.tipResult);



//Todo calculate total + tip 100 + 15 = 115
//let totalOutputBox = document.getElementById('totalBillWithTip');
//document.getElementById('totalBillWithTip').innerHTML = 100 + window.tiptipResultValue;
//console.log("calculate total + tip");
//console.log(billAmount * tipResult);

//Todo calculate tip if there is more than 1 person tip / people 15 / 2 = 7.50