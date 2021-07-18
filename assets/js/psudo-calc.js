//! GET USER INPUTS FOR TOTAL, # OF GUESTS, TIP %

// Bill Total Input
let totalInputBox = document.getElementById('billTotalInput');
// Number of guests input
let guestInputBox = document.getElementById('numOfGuestsInput');
//  Tip Button input
let tipButtonResult = document.getElementById('tipPercentOutput');
document.getElementById('tipPercentOutput').innerHTML = "15%";



// total bill 
totalInputBox.onchange = () => {
    document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;
    console.log(totalInputBox.value);
    billAmount = totalInputBox.value;
}


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
    console.log("test2" + numberOfGuests);
}

// Tip Buttons


document.body.addEventListener('change', (e) => {
    let target = e.target;
    let message = "15%";
    switch (target.id) {
        case '20per':
            message = '20%';
            tipvalue = 0.20;
            break;
        case '15per':
            message = '15%';
            tipvalue = 0.15;
            break;
        case '10per':
            message = '10%';
            tipvalue = 0.10;
            break;
    }

    document.getElementById('tipPercentOutput').innerHTML = message;
    console.log("test3 " + message);



});







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