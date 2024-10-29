

const colorChangeBtn = document.getElementById('colorChangeBtn');

colorChangeBtn.onclick = changeBackgroundColor;

const colors = ['#4CAF50', '#795548', '#9E9E9E', '#2196F3', '#87CEEB', '#FF9800', '#388E3C','#f4f4f4'];
    
let currentColorIndex = 0;

function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.setAttribute("style", "background-color: " + colors[randomIndex] + " !important;");
}

