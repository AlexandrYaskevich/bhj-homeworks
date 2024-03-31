
const progress = document.getElementById('progress');
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {         
        xhr.upload.onprogress = function(event) {
            progress.value = event.loaded;
            }
        
    });
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);
    xhr.send(formData);
});

