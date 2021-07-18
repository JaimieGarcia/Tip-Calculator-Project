var guestInputBox = document.getElementById('numOfGuestsInput');

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