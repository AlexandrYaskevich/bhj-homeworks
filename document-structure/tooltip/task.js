const hasTooltips = [...document.querySelectorAll('.has-tooltip')];
let div = document.createElement('div');
div.classList.add('tooltip');
 
hasTooltips.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault(); 
        div.textContent = e.currentTarget.title;
        e.currentTarget.after(div);
        div.classList.toggle('tooltip_active');
        
    });
});