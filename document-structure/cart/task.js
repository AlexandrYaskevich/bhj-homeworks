const cartProducts = document.querySelector('.cart__products');
const products = [...document.getElementsByClassName('product')];
const images = [...document.querySelectorAll('.product__image')];
 
const mins = [...document.getElementsByClassName('product__quantity-control product__quantity-control_dec')];
const pluss = [...document.getElementsByClassName('product__quantity-control product__quantity-control_inc')];  
const counters = [...document.getElementsByClassName('product__quantity-value')];
 
const addsBasket = [...document.querySelectorAll('.product__add')];
let basket = [];
 
 
mins.forEach((min, index) => {
    min.addEventListener('click', (e) => {
      if(mins.indexOf(e.currentTarget) === index)  {
            if(counters[index].textContent > 0) {
            counters[index].textContent--;
            }
       }
    })
})
pluss.forEach((plus, index) => {
    plus.addEventListener('click', (e) => {
       if(pluss.indexOf(e.currentTarget) === index) {
         counters[index].textContent++;
        }
    })
})
 
addsBasket.forEach((add, index)=>{
    add.addEventListener('click', (e) => {       
        if(parseInt(products[index].children[2].children[0].children[1].children[1].textContent) > 0){
            if(!basket.find((i) => i === products[index].dataset.id)) {
                cartProducts.insertAdjacentHTML('afterbegin',`
                <div class="cart__product" data-id=${products[index].getAttribute('data-id')}>
                <img class="cart__product-image" src=${products[index].children[1].src}>
                <div class="cart__product-count">${parseInt(products[index].children[2].children[0].children[1].children[1].textContent)}</div>
                </div>`);
                basket.push(products[index].dataset.id);
                console.log(document.querySelector('.cart__product').dataset.id);
            } 
            else {                
                if(document.querySelector('.cart__product').dataset.id == products[index].dataset.id) {
                    document.querySelector('.cart__product').children[1].textContent = parseInt(document.querySelector('.cart__product').children[1].textContent) + parseInt(products[index].children[2].children[0].children[1].children[1].textContent);
                }  
            }    
        }
     })
}) 
 
