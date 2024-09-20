let createNumButtons = () => {
    for (i = 0; i < 10; i++) {
        let numButton = document.createElement("button")
        numButton.classList.add('button', `number-${i}`)
        numButton.textContent = `${i}`
        let parent = document.querySelector('num-buttons').appendChild(numButton)
    }
}