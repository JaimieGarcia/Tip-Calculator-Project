var guestInputBox = document.getElementById('numOfGuestsInput');


guestInputBox.onkeyup = function () {
    document.getElementById('numOfGuestsOutput').innerHTML = guestInputBox.value;
}