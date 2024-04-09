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
 
        const aLists = [...document.querySelectorAll('.task__remove')];
        const divTasks = [...document.querySelectorAll('.task')];
                aLists.forEach((element, index) => {
                    element.onclick = function (e) {
                        if(aLists.indexOf(e.currentTarget) === index) {
                            divTasks[index].remove();
                            }
                        }
                });
              
      /** Вы имели ввиду это??? => у меня на компьюетере это не работает  document.querySelectorAll('.task__remove').onclick = function (e) {
            e.preventDefault();
            if(aList.indexOf(e.currentTarget) === index) {
                document.querySelectorAll('.task').remove();
             }
            }
        } **/
    }
});