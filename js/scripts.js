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
    $("#1").click(function() {
      $("#1").hide();
    });
    $("#2").click(function() {
      $("#2").hide();
    });
    $("#3").click(function() {
      $("#3").hide();
    });
    $("#4").click(function() {
      $("#4").hide();
    });
    $("#5").click(function() {
      $("#5").hide();
    });
    $("#6").click(function() {
      $("#6").hide();
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
