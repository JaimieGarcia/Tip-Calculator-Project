//! GET USER INPUTS FOR TOTAL, # OF GUESTS, TIP %

// Bill Total Input
var totalInputBox = document.getElementById('billTotalInput');
// Number of guests input
var guestInputBox = document.getElementById('numOfGuestsInput');
//  Tip Button input


// total bill 
totalInputBox.onchange = () => {
    document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;
    console.log(totalInputBox.value);
}


// Number of guests 

numberOfGuests = 1;
console.log(numberOfGuests);

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
    console.log(numberOfGuests);
}

// Tip Buttons
let tipButtonResult = document.getElementById('tipPercentOutput');
document.getElementById('tipPercentOutput').innerHTML = "15%";

document.body.addEventListener('change',  (e) => {
    let target = e.target;
    let message;
    switch (target.id) {
        case '20per':
            message = '20%';
            value = 20;
            break;
        case '15per':
            message = '15%';
            value = 15;
            break;
        case '10per':
            message = '10%';
            value = 10;
            break;
    }
    document.getElementById('tipPercentOutput').innerHTML = value + "%";
    console.log(message);
    console.log(value);
});


//! DO MATH STUFF


//! DISPLAY MATH IN THE OUTPUT AREAS 






// document.querySelector('#tip-form').onchange = () => {

//     // get total from total input
//     var billAmount = Number(document.getElementById('billTotalInput').value);
//     var tipPercent = 15;
//     var numberOfGuests = 1;

//     // get the value of the tip radios
//     document.getElementById('tipButtons').onchange = () => {
//         var radios = document.getElementsByName("btnradio");
//         var selected = Array.from(radios).find(radio => radio.checked);
//         console.log(selected.value);
//         window.tipPercent = selected.value;
//         //alert(selected.value);
//     }

//     var totalInputBox = document.getElementById('billTotalInput');
//     totalInputBox.onkeyup = function () {
//         document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;
//         billAmount = totalInputBox.value;
//     }


//     var tipValue = billAmount * (tipPercent / 100)
//     var finalBill = billAmount + tipValue
//     console.log("Bill Amount " + billAmount);
//     console.log(tipPercent + "% Tip");
//     // console.log("Total + Tip " + finalBill)




// }



//Show Results