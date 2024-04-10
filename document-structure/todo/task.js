const form = document.querySelector('.tasks__control');
const tasksInput = document.querySelector('.tasks__input');
const taskslist = document.querySelector('.tasks__list');
 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(tasksInput.value.trim().length > 0) {
        taskslist.insertAdjacentHTML('afterbegin', `
        <div class="task">
          <div class="task__title">
            ${tasksInput.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
        `);
        form.reset();
 
        const aList = document.querySelector('.task__remove');
        const divTask = document.querySelector('.task');
                
        aList.onclick = function (e) {
                       
                            divTask.remove();
                            }
               
              

    }
});