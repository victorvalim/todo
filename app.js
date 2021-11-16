function loadEvents() {

  document.querySelector('form').addEventListener('submit', submitInput);
  document.querySelector('ul').addEventListener('click', lineThroughOrDelete);
  document.getElementById('clear').addEventListener('click', clearTasks);

}

loadEvents();


function submitInput(e) {

  e.preventDefault();

  let input = document.querySelector('input');

  if (input.value != '') addTask(input.value);

  input.value = '';

}

function addTask(task) {

  let ulElement = document.querySelector('ul');
  let liElement = document.createElement('li');

  liElement.innerHTML = `<span id="delete" class="iconify" data-icon="bi:x-lg"></span><input type="checkbox" class="checkbox-round"><label>${task}</label>`;

  ulElement.appendChild(liElement);

  document.querySelector('.tasksBoard').style.display = 'block';
}

function deleteTask(e) {

  let removeTask = e.target.parentNode;
  let parentNode = removeTask.parentNode;

  parentNode.removeChild(removeTask);
}

function lineTroughTask(e) {

  const task = e.target.nextSibling;

  if (e.target.checked) {
    task.style.fontStyle = "italic";
    task.style.textDecoration = "line-through";
    task.style.color = "red";

  } else {
    task.style.fontStyle = "normal";
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";

  }

}

function lineThroughOrDelete(e) {

  if (e.target.id == 'delete') {
    deleteTask(e);
  }
  else {
    lineTroughTask(e);
  }

}

function clearTasks(e) {

  document.querySelector('ul').innerHTML = '';

}