const contentWrapper = document.querySelector('.content-wrapper');
const h2 = document.querySelectorAll('h2');
const themeChangeBtn = document.getElementById('themeChangeBtn');
const p = document.querySelectorAll('p');
const hr = document.querySelectorAll('hr');
themeChangeBtn.onclick = changeBackgroundTheme;

window.addEventListener('load', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        setDarkMode();
    } else {
        setLightMode();
    }
});


const colors = ['#f4f4f4', 'black'];
let currentColorIndex = 0;

function changeBackgroundTheme() {
    if (currentColorIndex === 0) {
        setDarkMode();
    } else {
        setLightMode();
    }
}

function setDarkMode()  {
        currentColorIndex = 1;
        document.body.setAttribute("style", "background-color: " + colors[currentColorIndex] + " !important;");
        contentWrapper.style.backgroundColor = '#333333';
        themeChangeBtn.innerHTML = 'Light theme';
        h2.forEach(h => {
            h.classList.add('dark');
        });
        p.forEach(h => {
            h.classList.add('dark');
        });
        hr.forEach(h => {
            h.classList.add('dark');
        });
        localStorage.setItem('darkMode', 'true');
    } 
function setLightMode()  {
        currentColorIndex = 0;
        document.body.setAttribute("style", "background-color: " + colors[currentColorIndex] + " !important;");
        contentWrapper.style.backgroundColor = 'white';
        themeChangeBtn.innerHTML = 'Dark theme';
        h2.forEach(h => {
            h.classList.remove('dark');
        });
        p.forEach(h => {
            h.classList.remove('dark');
        });
        hr.forEach(h => {
            h.classList.remove  ('dark');
        });
        localStorage.setItem('darkMode', 'false'); 
}

