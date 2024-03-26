

    // Function to scroll to the ticket section when the button is clicked
    function goTickitSection() {
        // Get the offset top position of the target section
        const ticketSection = document.getElementById('main-tickit-section');
        const offsetTop = ticketSection.offsetTop;
        // Scroll to the ticket section smoothly
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
















