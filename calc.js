let resultElement = document.getElementById('result');

function appendToScreen(value) {
    resultElement.value += value;
}

function clearScreen() {
    resultElement.value = '';
}

function deleteChar() {
    resultElement.value = resultElement.value.slice(0, -1);
}

function calculate() {
    try {
        resultElement.value = eval(resultElement.value);
    } catch {
        resultElement.value = 'Error';
    }
}