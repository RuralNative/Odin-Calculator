let createNumButtons = () => {
    for (i = 0; i < 10; i++) {
        let numButton = document.createElement("button")
        numButton.classList.add('num-button', `number-${i}`)
        numButton.textContent = `${i}`
        document.querySelector('num-buttons').appendChild(numButton)
    }
}

let createOperatorsButtons = () => {
    const operators = ['+', '-', '*', '/', '=']
    for (i = 0; i < 5; i++) {
        let operatorButton = document.createElement("button")
        operatorButton.classList.add('operator-button', `operator-${operators[0]}`)
        operatorButton.textContent = `${operators.shift}`
        document.querySelector('operator-buttons').appendChild(operatorButton)
    }
}