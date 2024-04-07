const content = document.getElementById('subscribe-modal');
const button = document.querySelector('.modal__close');
 
button.addEventListener('click', () => {
    content.classList.remove('modal_active');
    document.cookie = 'status=closed';
    console.log(document.cookie.includes("status=closed"));

});
 
 if(!document.cookie.includes("status=closed")){   
        content.classList.add('modal_active');
}

