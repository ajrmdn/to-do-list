var taskList = []
var count = 0;

$(document).ready(function(){
  $("#todoForm").submit(function(event){
    event.preventDefault();
    var input = $("#todoInput").val();
    var task1 = new Todo(input);
    taskList.push(task1);
    console.log(taskList);
    $("#list").append("<li id='" + count + "'>" + "To do:" + " " + task1.task + "</li>");
    id=""

    $('ul').on('click', 'li', function () {
      $(this).toggleClass('crossOff');
    });

    $('ul').on('dblclick', 'li', function () {
      $(this).hide('li');
    });
  });
});

function counter() {
  count ++;
  return count;
}

function Todo(task) {
  this.task = task
  this.id = counter();
}
