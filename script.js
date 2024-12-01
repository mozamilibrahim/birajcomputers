function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Example validation
    if (username === "Mozammil" && password === "1122") {
        // Redirect to a new page if successful
        window.location.href = "file:///C:/Users/Mozammil%20Mondal/OneDrive/Desktop/WEB%20TEST/test.html"; // Change this to your desired link
        return false;
    } else {
        // Show error message
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid Username or Password!';
        return false;  // Prevents form submission
    }
}




function highlightText(element, query) {
    let text = element.textContent;
    let regex = new RegExp(`(${query})`, 'gi');
    element.innerHTML = text.replace(regex, '<span style="background-color: red;">$1</span>');
}

function searchCards() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let h3 = card.querySelector('h3');
        let links = card.getElementsByTagName('a');
        let matchFound = false;

        if (h3.textContent.toLowerCase().includes(input)) {
            matchFound = true;
            highlightText(h3, input);
        } else {
            h3.innerHTML = h3.textContent; // Reset highlighting if no match
            for (let j = 0; j < links.length; j++) {
                if (links[j].textContent.toLowerCase().includes(input)) {
                    matchFound = true;
                    highlightText(links[j], input);
                } else {
                    links[j].innerHTML = links[j].textContent; // Reset
                }
            }
        }

        card.style.display = matchFound ? '' : 'none';
    }
}









// JavaScript code to manage cards dynamically

document.getElementById('addCardForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const serviceTitle = document.getElementById('serviceTitle').value;
    const links = document.getElementById('links').value.split(',');

    // Create new card element
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${serviceTitle}</h3>
        <ul>
            ${links.map(link => `<li><a href="${link.trim()}" target="_blank">${link.trim()}</a></li>`).join('')}
        </ul>
        <button class="delete-btn">Delete</button>
    `;

    // Add delete functionality
    card.querySelector('.delete-btn').addEventListener('click', function () {
        card.remove();
    });

    // Append the new card to the grid
    document.getElementById('cardGrid').appendChild(card);

    // Reset the form
    document.getElementById('addCardForm').reset();
});