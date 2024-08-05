function displayColor() {
    const number = document.getElementById('number').value;
    const colorDisplay = document.getElementById('colorDisplay');

    let color;
    switch (parseInt(number)) {
        case 1:
            color = 'red';
            break;
        case 2:
            color = 'yellow';
            break;
        case 3:
            color = 'green';
            break;
        default:
            color = 'white';
            break;
    }

    colorDisplay.style.backgroundColor = color;
}