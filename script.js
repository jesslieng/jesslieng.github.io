const welcomeScreen = document.getElementById('welcome-screen');
const nameInput = document.getElementById('name-input');
const submitNameButton = document.getElementById('submit-name');
const userNameSpan = document.getElementById('user-name');
const header = document.querySelector('header');
const homeSection = document.querySelector('.home');
const educationSection = document.querySelector('.education');
const servicesSection = document.querySelector('.services');
const skillsSection = document.querySelector('.skills');
const contactSection = document.querySelector('.contact');
const footer = document.querySelector('footer');

submitNameButton.addEventListener('click', () => {
    const userName = nameInput.value.trim();
    if (userName) {
        userNameSpan.textContent = userName;
        welcomeScreen.classList.add('hidden');
        header.classList.remove('hidden');
        homeSection.classList.remove('hidden');
        educationSection.classList.remove('hidden');
        servicesSection.classList.remove('hidden');
        skillsSection.classList.remove('hidden');
        contactSection.classList.remove('hidden');
        footer.classList.remove('hidden');
    } else {
        alert('Please enter your name.');
    }
});