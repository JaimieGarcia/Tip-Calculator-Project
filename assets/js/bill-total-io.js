var totalInputBox = document.getElementById('billTotalInput');

totalInputBox.onchange = () => {
    document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;
    console.log(totalInputBox.value);
}