document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');

    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
        searchInput.value = savedSearchTerm;
        highlightTerms(savedSearchTerm);
    }

    searchForm.addEventListener('input', function(event) {
        const searchTerm = searchInput.value.toLowerCase();
        localStorage.setItem('searchTerm', searchTerm);
        highlightTerms(searchTerm);
    });

    function highlightTerms(searchTerm) {
        const content = document.querySelectorAll('p, h1, h2, h3, h4, h5');
        content.forEach(element => {
            element.innerHTML = element.innerHTML.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '');

            if (searchTerm && element.textContent.toLowerCase().includes(searchTerm)) {
                const regex = new RegExp(`(${searchTerm})`, 'gi');
                element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$1</span>');
            }
        });
    }
});
