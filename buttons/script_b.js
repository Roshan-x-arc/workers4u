// Select all buttons in each group
const peopleButtons = document.querySelectorAll('.people-btn');
const mealsButtons = document.querySelectorAll('.meals-btn');
const vegButtons = document.querySelectorAll('.veg-btn');

// Function to handle button selection logic
function handleSelection(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'selected' class from all buttons in the group
            buttons.forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' class to the clicked button
            this.classList.add('selected');
        });
    });
}

// Apply the selection handler for each group
handleSelection(peopleButtons);
handleSelection(mealsButtons);
handleSelection(vegButtons);

// Add event listener for Done button click
document.querySelector('.done-btn').addEventListener('click', function() {
    // Redirect to login page
    window.location.href = "login.html";  // Ensure login.html exists
});
