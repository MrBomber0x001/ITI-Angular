function playFizzBuzz() {
    const number = document.getElementById('number').value;
    const resultElement = document.getElementById('result');

    if (number) {
        const num = parseInt(number);
        let result;

        if (num % 15 === 0) {
            result = 'FizzBuzz';
        } else if (num % 3 === 0) {
            result = 'Fizz';
        } else if (num % 5 === 0) {
            result = 'Buzz';
        } else {
            result = num;
        }

        resultElement.textContent = result;
    } else {
        resultElement.textContent = 'Please enter a number.';
    }
}