const form = document.querySelector('.tasks__control');
const tasksInput = document.querySelector('.tasks__input');
const taskslist = document.querySelector('.tasks__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(Array.from(tasksInput.value).length > 0) {
        let div = document.createElement('div');
        let divTask = document.createElement('div');
        divTask.setAttribute('class', 'task');
        taskslist.appendChild(divTask);

        div.setAttribute('class', 'task__title');
        div.textContent = tasksInput.value;
        let a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('class', 'task__remove');
        a.textContent = 'x';
        divTask.appendChild(div);
        divTask.appendChild(a);
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
        }
});





