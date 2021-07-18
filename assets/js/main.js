//console.log("Is this working");
document.querySelector('#tip-form').onchange = function(){



    //! these shoudl be the user inputs for the front end form stuff
    var billAmount = Number(document.getElementById('billTotalInput').value);

    var numberOfGuests = 1;
    var gratuity = 15;

}

//! Event listners

//Bill Total 
 let totalInputBox = document.getElementById('billTotalInput');

 totalInputBox.onchange = function () {
     document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;


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

console.log("Bill Total: " + billAmount);
//console.log("Thar be " + numberOfGuests + " guests");
//console.log("Gratuity(%) is: " + gratuityPercent() + "%");
//console.log("Gratuity(math stuff) is: " + setGratuityDecimal());
//console.log("Gratuity($) is: $" + calculateGratuity());
//console.log("Your total including gratuity is:" + totalWithGrat(billAmount));
//console.log("Split " + numberOfGuests + " ways is:" + peopleSplit());