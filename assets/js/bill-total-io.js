var inputBox = document.getElementById('billTotalInput');

inputBox.onkeyup = function(){
    document.getElementById('billTotalOutput').innerHTML = "$" + inputBox.value;
}