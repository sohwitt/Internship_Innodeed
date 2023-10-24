
const form = document.getElementById('form');
const input = document.getElementById('input');
const tasksUl = document.getElementById('tasks');

const tasks = JSON.parse(localStorage.getItem('tasks'));

if(tasks){
  tasks.forEach((task) =>{
    addTask(task);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTask();
});

function addTask(task) {

  let taskText = input.value;

  if(task){
    taskText = task.text;
  }


  if (taskText) {
    const taskEl = document.createElement('li');

    if(task && task.completed){
      taskEl.classList.add('completed');

    }
    taskEl.innerText = taskText;

    taskEl.addEventListener('click', () => {
      taskEl.classList.toggle('completed');
      updateLS();
    });

    taskEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      taskEl.remove();
      updateLS();
    })
    tasksUl.appendChild(taskEl);

    input.value = '';

    updateLS();
  }
};

function updateLS() {
  const tasksEl = document.querySelectorAll('li');

  const tasks = [];

  tasksEl.forEach((el) => {
    tasks.push({
      text: el.innerText,
      completed: el.classList.contains("completed")
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
