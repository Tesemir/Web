function updateDateTime() {
    const now = Date();
    const dateTimeString = now.toString(); 
    document.getElementById('dateTime').innerHTML = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 1000);
