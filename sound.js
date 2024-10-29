document.getElementById('play-sound-btn').addEventListener('click', function() {
    var sound = document.getElementById('notificationSound');
    sound.currentTime = 0;
    sound.play();
});
