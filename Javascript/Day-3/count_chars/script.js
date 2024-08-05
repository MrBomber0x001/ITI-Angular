function searchLetter() {
    const text = document.getElementById('text').value;
    const letter = document.getElementById('letter').value;
    const resultElement = document.getElementById('result');

    if (text && letter) {
        const locations = [];
        for (let i = 0; i < text.length; i++) {
            if (text[i] === letter) {
                locations.push(i);
            }
        }
        resultElement.textContent = `[${locations.join(', ')}]`;
    } else {
        resultElement.textContent = 'Please fill in both fields.';
    }
}