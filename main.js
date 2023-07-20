$(document).ready(function() {
    const taskForm = $('#task-form');
    const taskInput = $('#task-input');
    const taskList = $('#task-list');
  
    taskForm.on('submit', function(event) {
      event.preventDefault();
      const taskName = taskInput.val().trim();
      if (taskName !== '') {
        const newTask = $('<li></li>').text(taskName);
        taskList.append(newTask);
        taskInput.val('');
      }
    });
  
    taskList.on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  