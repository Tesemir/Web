const openPopupBtn = document.getElementById('open-popup-btn');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    
    });

    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });