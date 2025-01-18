// Function to redirect to login or register page
function redirectTo(type) {
    if (type === 'login') {
        window.location.href = 'login-register.html#login';
    } else if (type === 'register') {
        window.location.href = 'login-register.html#register';
    }
}

document.querySelector('.notification button').addEventListener('click', function() {
    document.querySelector('.notification').style.display = 'none';
});

// Handle URL hash to display the correct form
window.onload = function () {
    const hash = window.location.hash;
    if (hash === '#login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    } else if (hash === '#register') {
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
    }
};

// Switch between Login and Register forms
function switchToRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function switchToLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}
