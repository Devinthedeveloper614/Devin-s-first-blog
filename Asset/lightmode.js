// Initial setup to hide the moon button
document.getElementById('revealButton').style.display = 'none';

// Default setup: Light mode
if (!document.body.classList.contains('light-mode')) {
    toggleLightMode();
}

// Event listener for the toggle button
document.getElementById('light').addEventListener('click', function() {
    toggleLightMode();
});

// Function to toggle light mode
function toggleLightMode() {
    // Toggle light mode
    document.body.classList.toggle('light-mode');

    // Adjust button visibility based on light mode
    var sunButton = document.getElementById('light');
    var moonButton = document.getElementById('revealButton');
    sunButton.style.display = (document.body.classList.contains('light-mode')) ? 'block' : 'none';
    moonButton.style.display = (document.body.classList.contains('light-mode')) ? 'none' : 'block';

    // Adjust styles for light mode
    if (document.body.classList.contains('light-mode')) {
        // Set background to white and text color to black
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';

        // Hide moon button in light mode
        moonButton.style.display = 'none';
    } else {
        // Reveal moon button in dark mode
        moonButton.style.display = 'block';

        // Revert styles to default for dark mode
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }
}