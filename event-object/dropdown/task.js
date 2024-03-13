const value = document.querySelector('.dropdown__value');
var itemsList = Array.from(document.querySelectorAll('.dropdown__item'));
function openMenu (){
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')  
};
function closeMenu (){
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')  
};
value.addEventListener('click',openMenu );
itemsList.forEach((item, index) =>{
    item.onclick = () => {
        closeMenu();
        value.textContent = itemsList[index].textContent;
        return false;
}
});

         

