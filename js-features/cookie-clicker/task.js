const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById("cookie");
cookie.onclick = function() {
    clickerCounter.textContent++;
    if(clickerCounter.textContent % 2 === 0){
    cookie.width = 180;
    }
    else{
    cookie.width = 200;  
    }
}

