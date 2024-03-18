const reveals = [...document.querySelectorAll('.reveal')];
function isVisible (element) {
    const {top, bottom} = element.getBoundingClientRect();
    if (bottom < 15) {
        return false;
    }
    if (top > window.innerHeight) {
        return false;
    }
    return true;
}

function activiti () {
    reveals.forEach(element => {
        if(isVisible(element)) {
            if(!element.classList.contains("reveal_active")) {
             element.classList.add('reveal_active');
            }
             else {
            element.classList.remove('reveal_active')
            }
        }
    })
}
window.addEventListener('scroll', activiti)