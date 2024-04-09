const cartProducts = document.querySelector('.cart__products');
const products = [...document.getElementsByClassName('product')];
const images = [...document.querySelectorAll('.product__image')];
 
const mins = [...document.getElementsByClassName('product__quantity-control product__quantity-control_dec')];
const pluss = [...document.getElementsByClassName('product__quantity-control product__quantity-control_inc')];  
const counters = [...document.getElementsByClassName('product__quantity-value')];
 
const addsBasket = [...document.querySelectorAll('.product__add')];
 
 
 
mins.forEach((min, index) => {
    min.addEventListener('click', (e) => {
      if(counters[index].textContent > 1)  {
            counters[index].textContent--;
       }
    })
})
pluss.forEach((plus, index) => {
    plus.addEventListener('click', (e) => {     
         counters[index].textContent++;
    })
})
 
addsBasket.forEach((add, index)=>{
    add.addEventListener('click', (e) => {       
            let resultFind = [...document.querySelectorAll('.cart__product')].find((i) => i.dataset.id === products[index].dataset.id)
                if(resultFind) {
                   let count =  parseInt(document.querySelector( `[data-id="${products[index].dataset.id}"]`).children[1].textContent);
                   document.querySelector( `[data-id="${products[index].dataset.id}"]`).children[1].textContent = count + parseInt(products[index].children[2].children[0].children[1].children[1].textContent);
                }
                else{
                    
                    cartProducts.insertAdjacentHTML('afterbegin',`
                    <div class="cart__product" data-id=${products[index].getAttribute('data-id')}>
                    <img class="cart__product-image" src=${products[index].children[1].src}>
                    <div class="cart__product-count">${parseInt(products[index].children[2].children[0].children[1].children[1].textContent)}</div>
                    </div>`);
                }
 
        })
}) 