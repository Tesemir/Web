function displayGreeting() {
    const date = new Date();
    const hours = date.getHours();
    let greeting;

    switch (true) {
        case (hours >= 5 && hours < 12):
            greeting = "Good morning! 🌅";
            break;
        case (hours >= 12 && hours < 17):
            greeting = "Good afternoon! ☀️";
            break;
        case (hours >= 17 && hours < 21):
            greeting = "Good evening! 🌇";
            break;
        default:
            greeting = "Good night! 🌙";
    }

    // Display the greeting in the specified location
    document.getElementById('greetingDisplay').innerText = greeting;
}

// Call the function to display the greeting when the page loads
document.addEventListener('DOMContentLoaded', displayGreeting);
