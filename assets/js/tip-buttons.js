let result = document.querySelector('#tipPercentOutput');
document.body.addEventListener('change', function (e) {
    let target = e.target;
    let message;
    switch (target.id) {
        case '20per':
            message = '20%';
            break;
        case '15per':
            message = '15%';
            break;
        case '10per':
            message = '10%';
            break;
    }
    result.textContent = message;
});