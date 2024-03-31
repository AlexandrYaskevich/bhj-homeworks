const  cartProducts = document.querySelector('.cart__products');
const products = [...document.getElementsByClassName('product')];
const images = [...document.querySelectorAll('.product__image')];
 
const mins = [...document.getElementsByClassName('product__quantity-control product__quantity-control_dec')];
const pluss = [...document.getElementsByClassName('product__quantity-control product__quantity-control_inc')];  
const counters = [...document.getElementsByClassName('product__quantity-value')];
const addsBasket = [...document.querySelectorAll('.product__add ')];
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
        if(addsBasket.indexOf(e.currentTarget) === index) {
            if(counters[index].textContent > 0) {
                 if(!basket.find((i) => i === products[index].getAttribute('data-id'))) {
                 let productInBasket = products[index].cloneNode(false);
                 productInBasket.classList.remove('product');
                productInBasket.classList.add('cart__product');
                productInBasket.appendChild(images[index].cloneNode(true));
                let divCounter = document.createElement('div');
                 divCounter.setAttribute('class', 'cart__product-count');
                divCounter.textContent = parseInt(counters[index].textContent);
                productInBasket.appendChild(divCounter);
                cartProducts.appendChild(productInBasket);
                basket.push(products[index].getAttribute('data-id'));
                 }
                 else {
                    let divCounters = [...document.querySelectorAll('.cart__product-count')];
                    divCounters[index].textContent = parseInt(divCounters[index].textContent) + parseInt(counters[index].textContent);
                 }
            } 
        
 
        }
    })
}) 