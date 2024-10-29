document.getElementById('greetBtn').addEventListener('click', function () {
    const nameInput = document.getElementById('nameInput').value;
    const greetingDisplay = document.getElementById('dynamicGreeting');

    if (nameInput) {
        greetingDisplay.innerHTML = `Hello, <span style="color: #000000; text-decoration: underline;">${nameInput}!</span> Welcome to the Minecraft fun page!`;
    } else {
        greetingDisplay.textContent = 'Please enter your name.';
    }
});
