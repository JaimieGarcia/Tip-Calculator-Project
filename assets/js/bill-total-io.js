var totalInputBox = document.getElementById('billTotalInput');

totalInputBox.onkeyup = function () {
    document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;
    var billAmount = totalInputBox.value;
}