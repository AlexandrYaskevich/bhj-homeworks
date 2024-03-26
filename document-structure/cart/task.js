const  cartProducts = document.querySelector('.cart__products');
const products = [...document.getElementsByClassName('product')];
const image = [...document.querySelectorAll('.product__image')];

const mins = [...document.getElementsByClassName('product__quantity-control product__quantity-control_dec')];
const pluss = [...document.getElementsByClassName('product__quantity-control product__quantity-control_inc')];  
const counters = [...document.getElementsByClassName('product__quantity-value')];
const addsBasket = [...document.querySelectorAll('.product__add ')];


 
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
            let productBasket = products[index].cloneNode(false);
            cartProducts.appendChild(productBasket);
            let counterBasket = document.createElement('div');
            counterBasket.classList.add('cart__product-count');
            counterBasket.textContent = counters[index].textContent;
            productBasket.appendChild(counterBasket);
            let imageBasket = image[index].cloneNode(true);
            productBasket.appendChild(imageBasket);

        }
    })
}) 
