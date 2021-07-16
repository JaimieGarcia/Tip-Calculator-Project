var inputBox = document.getElementById('numOfGuestsInput');

inputBox.onkeyup = function(){
    document.getElementById('numOfGuestsOutput').innerHTML = inputBox.value;
}