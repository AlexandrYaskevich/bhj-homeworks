const hasTooltips = [...document.querySelectorAll('.has-tooltip')];
let div = document.createElement('div');
div.classList.add('tooltip');
 
 
hasTooltips.forEach((element) => {
    
    element.addEventListener('click', (e) => {
        e.preventDefault(); 
        console.log(element.nextElementSibling);
        if(element.nextElementSibling === div) {
            div.classList.toggle('tooltip_active');
            
        }
        else {
            element.after(div);
            div.textContent = element.title;
 
            cords = element.getBoundingClientRect();
            div.style.left = cords.left + 10 + 'px';
            div.style.top = cords.top + 20 + 'px';
 
            div.classList.add('tooltip_active');
        }
  
    });
});