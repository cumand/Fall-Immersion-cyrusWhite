function darkMode() {
    
    // Get the body element
    const body = document.body;

    // Checks if the page is white
    if (body.style.backgroundColor === 'white') {
        // If it's white, change to dark mode
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        // If it's not white, change to white
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }

}
