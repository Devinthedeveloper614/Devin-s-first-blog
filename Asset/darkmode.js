// Function to toggle between light and dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = !body.classList.contains('dark-mode');

    // Toggle dark mode
    body.classList.toggle('dark-mode', isDarkMode);

    // Adjust button visibility based on dark mode
    const sunButton = document.getElementById('light');
    const moonButton = document.getElementById('revealButton');
    sunButton.style.display = isDarkMode ? 'block' : 'none';
    moonButton.style.display = isDarkMode ? 'none' : 'block';

    // Adjust styles for dark mode
    const sections = document.querySelectorAll('section');
    const titles = document.querySelectorAll('.title');

    sections.forEach(function(section) {
        section.style.border = isDarkMode ? '2px solid white' : ''; // Set border color
    });

    titles.forEach(function(title) {
        title.style.backgroundColor = isDarkMode ? '#000' : ''; // Set background color
        title.style.color = isDarkMode ? '#fff' : ''; // Set text color
    });
}

// Event listener for the moon button (dark mode)
document.getElementById('revealButton').addEventListener('click', function() {
    toggleDarkMode();
});

// Event listener for the sun button (light mode)
document.getElementById('light').addEventListener('click', function() {
    toggleDarkMode();
});