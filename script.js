// Event Handling
const clickBtn = document.getElementById('clickBtn');
const hoverBtn = document.getElementById('hoverBtn');
const keyInput = document.getElementById('keyInput');
const secretBtn = document.getElementById('secretBtn');
const eventOutput = document.getElementById('eventOutput');

clickBtn.addEventListener('click', () =>  {
    eventOutput.textContent = 'Button Clicked! Nice one!';
});

hoverBtn.addEventListener('mouseover', () => {
    eventOutput.textContent = 'You hovered over the button!';
});

hoverBtn.addEventListener('mouseout', () => {
    eventOutput.textContent = 'Hover ended. Come back!';
});

keyInput.addEventListener('keypress', (e) => {
    eventOutput.textContent = `You pressed: ${e.key}`;
});

secretBtn.addEventListener('dblclick', () => {
    eventOutput.textContent = 'Secret unlocked';
    secretBtn.classList.add('shake');
    setTimeout(() => secretBtn.classList.remove('shake'), 300);
});

// Color changing Button
const colorBtn = document.getElementById('colorBtn');
const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107'];
let colorIndex = 0;

colorBtn.addEventListener('click', () => {
    colorBtn.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    colorBtn.textContent = 'Color Changed!';
});

// Image Gallery
const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg'
];
let currentImage = 0;

nextBtn.addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    galleryImage.src = images[currentImage];
    galleryImage.style.opacity = 0;
    setTimeout(() => galleryImage.style.opacity = 1, 100);
});

prevBtn.addEventListener('click', () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    galleryImage.src = images[currentImage];
    galleryImage.style.opacity = 0;
    setTimeout(() => galleryImage.style.opacity = 1, 100);
});

// Tab switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active classes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Form validation
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput  = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const showError = (element, message) => {
    element.textContent = message;
};

const clearErrors = () => {
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
};

// Real-time validation
nameInput.addEventListener('input', () => {
    if (!nameInput.value.trim()) {
        showError(nameError, 'Name is required');
    } else {
        showError(nameError, '');
    }
});

emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        showError(emailError, 'Invalid email format');
    } else {
        showError(emailError, '');
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        showError(passwordError, 'Password must be at least 8 characters');
    } else {
        showError(passwordError, '');
    }
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    if (!nameInput.value.trim()) {
        showError(nameError, 'Name is required');
        isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
        showError(emailError, 'Invalid email format');
        isValid = false;
    }

    if (passwordInput.value.length < 8) {
        showError(passwordError, 'Password must be at least 8 characters');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

