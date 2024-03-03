const startTimer = document.getElementById("timer")
counterTimer = function () {
    timer.textContent --;

    if (timer.textContent < 1) {
        alert("Вы победили в конкурсе!");
        clearInterval(intevalID);
    }
}
let intevalID = setInterval(counterTimer, 1000);