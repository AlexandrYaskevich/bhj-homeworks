const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for(let i = 1; i < 10; i++) {
    let hole = document.getElementById(`hole${i}`);
        hole.onclick = function () {
            if(hole.className.includes( 'hole_has-mole' )) {
                dead.textContent++;
                resultDead = dead.textContent;
                if(dead.textContent >= 3) {
                    alert("Winner!");
                    dead.textContent = 0;
                    lost.textContent = 0;
                }
            }
            else {
                lost.textContent++;
                resultLost = lost.textContent;
                if(lost.textContent >= 5) {
                    alert("Looser!");
                    dead.textContent = 0;
                    lost.textContent = 0;
                }
            }
        }
}

