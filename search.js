document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const contentElements = document.querySelectorAll('.content-wrapper p, .content-wrapper h1, .content-wrapper h2'); 
    
    contentElements.forEach(element => {
        if (element.textContent.toLowerCase().includes(searchTerm)) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
});
