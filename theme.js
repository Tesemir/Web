const contentWrapper = document.querySelector('.content-wrapper','.content-wrapper-login'); 
const h2 = document.querySelectorAll('h2'); 
const themeChangeBtn = document.getElementById('themeChangeBtn'); 
const p = document.querySelectorAll('p'); 
const hr = document.querySelectorAll('hr'); 
const label = document.querySelectorAll('label'); 
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
        themeChangeBtn.innerHTML = 'Dark theme'; 
        h2.forEach(h => { 
            h.classList.add('dark'); 
        }); 
        p.forEach(h => { 
            h.classList.add('dark'); 
        }); 
        hr.forEach(h => { 
            h.classList.add('dark'); 
        }); 
        label.forEach(h => { 
            h.classList.add('dark'); 
        }); 
        localStorage.setItem('darkMode', 'true'); 

        /*Madi*/
        /*Добавил черную тему карточкам*/
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('dark');
            card.style.backgroundColor = '#444';
            card.style.color = 'white';
        });
    }  
    function setLightMode()  { 
        currentColorIndex = 0; 
        document.body.setAttribute("style", "background-color: " + colors[currentColorIndex] + " !important;"); 
        contentWrapper.style.backgroundColor = 'white'; 
        themeChangeBtn.innerHTML = 'Light theme'; 
        h2.forEach(h => { 
            h.classList.remove('dark'); 
        }); 
        p.forEach(h => { 
            h.classList.remove('dark'); 
        }); 
        hr.forEach(h => { 
            h.classList.remove  ('dark'); 
        }); 
        label.forEach(h => { 
            h.classList.remove  ('dark'); 
        }); 

        /*Madi*/
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('dark');
            card.style.backgroundColor = '';
            card.style.color = '';
        });
        localStorage.setItem('darkMode', 'false');  
    }

    