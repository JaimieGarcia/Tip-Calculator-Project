document.querySelector('#tip-form').onchange = function () {
    
    // get total from total input
    var billAmount = Number(document.getElementById('billTotalInput').value);
    var tipPercent = 0;
    // get the value of the tip radios
    document.getElementById('tipButtons').onchange = function () {
        var radios = document.getElementsByName("btnradio");
        var selected = Array.from(radios).find(radio => radio.checked);
        console.log(selected.value);
        window.tipPercent = selected.value;
        //alert(selected.value);
    }


    var tipValue = billAmount * (tipPercent / 100)
    var finalBill = billAmount + tipValue
    console.log(billAmount);
    console.log(tipPercent + "stuff");
   // console.log("Total + Tip " + finalBill)


}



//Show Results