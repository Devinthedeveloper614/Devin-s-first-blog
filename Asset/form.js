document.addEventListener('DOMContentLoaded', function() {
    const title4 = document.querySelector('.title4');

    // Retrieve data from localStorage
    const userData = localStorage.getItem('User');
    const titleData = localStorage.getItem('Title');
    const contentData = localStorage.getItem('Content');

    // Update the elements in the title4 section with the data from localStorage
    title4.querySelector('h4').textContent = titleData;
    title4.querySelector('p#content').textContent = contentData;
    title4.querySelector('p#User').textContent = `Posted by: ${userData}`;
});

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('#back button');

    backButton.addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirect to index.html
    });
});