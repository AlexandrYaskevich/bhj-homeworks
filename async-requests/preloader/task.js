const image = document.getElementById('loader');
const items = document.getElementById('items');
let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange',  () => {
    if(xhr.readyState === 4) {
        image.classList.remove('loader_active');
        let answer = JSON.parse(xhr.responseText);
        Object.keys(answer.response.Valute).forEach(function(key){
        items.innerHTML +=`
        <div class="item">
        <div class="item__code">
        ${answer.response.Valute[key].CharCode}
        </div>
        <div class="item__value">
        ${answer.response.Valute[key].Value}
        </div>
        <div class="item__currency">
        руб.
        </div>
        </div>`;})
    };
});
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
