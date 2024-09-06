// Predefined words
const adjective = ["crazy", "amazing", "fire"];
const shopName = ["engine", "foods", "garments"];
const anotherWord = ["bros", "limited", "hub"];

// Get DOM elements
const themeSwitch = document.getElementById('themeSwitch');
const body = document.getElementById('body');
const generateBtn = document.getElementById('generateBtn');
const demoDiv = document.getElementById('demo');
const themeToggle = document.querySelector('.theme-toggle');

// Theme toggle functionality
themeSwitch.addEventListener('change', toggleTheme);

function toggleTheme() {
    const isDarkMode = themeSwitch.checked;

    if (isDarkMode) {
        body.classList.remove('bg-light');
        body.classList.add('bg-dark', 'text-light');
    } else {
        body.classList.remove('bg-dark', 'text-light');
        body.classList.add('bg-light');
    }
}

// Generate business names
generateBtn.addEventListener('click', generateNames);

function generateNames() {
    const userInput = document.getElementById("userInput").value.trim();
    let text = "";

    if (userInput) {
        adjective.forEach(adj => {
            shopName.forEach(shop => {
                anotherWord.forEach(word => {
                    text += `<div class="col-md-4 my-2">
                                <div class="card p-3 ${themeSwitch.checked ? 'bg-secondary text-light' : ''}">
                                    <h5 class="card-title">${userInput} ${adj} ${shop} ${word}</h5>
                                </div>
                            </div>`;
                });
            });
        });
        demoDiv.innerHTML = text;
    } else {
        demoDiv.innerHTML = "<p class='text-danger'>Please enter a word to generate names!</p>";
    }
}

// Handle scroll event to show/hide the theme toggle
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Adjust the value as needed
        themeToggle.classList.add('hidden');
    } else {
        themeToggle.classList.remove('hidden');
    }
});
