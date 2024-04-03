const content = document.getElementById('subscribe-modal');
const button = document.querySelector('.modal__close_times');
 
button.addEventListener('click', () => {
    content.classList.remove('modal_active');
    document.cookie = 'status=' + encodeURIComponent('close');
});
 
window.addEventListener('load', () => {
    if(getCookie() == 'close'){
        content.classList.remove('modal_active');
    }
    else {
        content.classList.add('modal_active');
    }
  })
 
  
  const getCookie = (status) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + status + "=");
    if (parts.length === 2) {
    return parts.pop();
    }
}
 