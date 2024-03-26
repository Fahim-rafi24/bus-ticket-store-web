

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









    function addNewDiv() {
        // Create a new div element
        var newDiv = document.createElement("div");
        newDiv.classList.add("flex", "justify-between", "text-black", "border-b", "py-3", "text-left");
        
        // Add content to the new div
        newDiv.innerHTML = "<!-- Content of your new div goes here -->";
        
        // Get the seat-booking-info div
        var bookingInfoDiv = document.getElementById("seat-booking-info");
        
        // Append the new div to the seat-booking-info div
        bookingInfoDiv.appendChild(newDiv);
    }
    
    // Call the function to add the new div
    
    






