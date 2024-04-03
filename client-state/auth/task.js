const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.querySelector('.welcome');
 
 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.onload = function() {
        if(xhr.response.success) {
            const userId = xhr.response.user_id;
            localStorage.setItem('userId', userId);
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            welcome.querySelector('#user_id').textContent = userId;
        } else {
            alert('Неверный логин или пароль');
        }
    }        
    xhr.send(formData);
    form.reset();
 });
 