document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const contentElements = document.querySelectorAll('.content-wrapper p, .content-wrapper h1, .content-wrapper h2'); // Adjust selectors as needed

    contentElements.forEach(element => {
        if (element.textContent.toLowerCase().includes(searchTerm)) {
            element.style.display = ''; // Show element
        } else {
            element.style.display = 'none'; // Hide element
        }
    });
});
