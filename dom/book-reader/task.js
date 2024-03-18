const fonts = Array.from (document.querySelectorAll('.font-size'));
const text = document.querySelector('.book');
let size;

fonts.forEach((font, index) => {
    font.addEventListener('click', function(e) {
        for(let i = 0; i < fonts.length; i++) {
        fonts[i].classList.remove('font-size_active');
        text.classList.remove("book_fs-small");
        text.classList.remove("book_fs-big");
        }
        e.target.classList.add('font-size_active');
        e.preventDefault ();
        if(index === 0) {text.classList.add("book_fs-small")};
        if(index === 2) {text.classList.add("book_fs-big")};

    
    });
    
});

