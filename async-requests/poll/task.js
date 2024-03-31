const pollanswers = document.getElementById('poll__answers');
const polltitle = document.getElementById('poll__title');


let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange',  (e) => {
    if(xhr.readyState === 4) {
        let answer = JSON.parse(xhr.responseText);
        polltitle.textContent = answer.data.title;
        Object.keys(answer.data.answers).forEach(function(key) {
            pollanswers.innerHTML += `
            <button class="poll__answer">
            ${answer.data.answers[key]}
            </button>
          `;
          let buttons = [...document.querySelectorAll('.poll__answer')];
          buttons.forEach((but) =>{
            but.addEventListener('click', () => {
                alert("«Спасибо, ваш голос засчитан!»");
            })
          })
        })
    };
});
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
