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

    document.getElementById('greetingDisplay').innerText = greeting;
}

document.addEventListener('DOMContentLoaded', displayGreeting);
