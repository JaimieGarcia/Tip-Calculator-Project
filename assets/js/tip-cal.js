document.querySelector('#tip-form').onchange = () => {

    // get total from total input
    var billAmount = Number(document.getElementById('billTotalInput').value);
    var tipPercent = 15;
    var numberOfGuests = 1;

    // get the value of the tip radios
    document.getElementById('tipButtons').onchange = () => {
        var radios = document.getElementsByName("btnradio");
        var selected = Array.from(radios).find(radio => radio.checked);
        console.log(selected.value);
        window.tipPercent = selected.value;
        //alert(selected.value);
    }

    var totalInputBox = document.getElementById('billTotalInput');
    totalInputBox.onkeyup = function () {
        document.getElementById('billTotalOutput').innerHTML = "$" + totalInputBox.value;
        billAmount = totalInputBox.value;
    }


    var tipValue = billAmount * (tipPercent / 100)
    var finalBill = billAmount + tipValue
    console.log("Bill Amount " + billAmount);
    console.log(tipPercent + "% Tip");
    // console.log("Total + Tip " + finalBill)




}



//Show Results