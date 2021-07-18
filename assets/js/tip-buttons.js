let tipButtonResult = document.getElementById('tip-output');
document.getElementById('tip-output').innerHTML = 15;

document.body.addEventListener('change',  (e) => {
    let target = e.target;
    let message;
    switch (target.id) {
        case '20per':
            message = '20%';
            value = 20;
            break;
        case '15per':
            message = '15%';
            value = 15;
            break;
        case '10per':
            message = '10%';
            value = 10;
            break;
    }
    document.getElementById('tip-output').innerHTML = value + "%";
    console.log(message);
    console.log(value);
});