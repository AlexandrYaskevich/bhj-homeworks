const hasTooltips = [...document.querySelectorAll('.has-tooltip')];


hasTooltips.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault(); 
        let div = document.createElement('div');
        div.textContent = hasTooltips[hasTooltips.indexOf(e.currentTarget)].title;
        div.setAttribute("class", '.tooltip_active');
        e.currentTarget.appendChild(div);
    });
});