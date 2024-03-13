const tabs = [...document.querySelectorAll(".tab")];
const contents = [...document.querySelectorAll(".tab__content")];


tabs.forEach((tab, index)  => {
    
    tab.addEventListener('click', function(event){
        for(let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('tab_active');
            contents[i].classList.remove('tab__content_active');
        }

        event.target.classList.add('tab_active');
        
        if(tabs[index] === event.target) {
            contents[index].classList.add('tab__content_active');
        }

    })
})


