var addButton = document.getElementsByClassName("addButton")[0];
var subtractButton = document.getElementsByClassName("minusButton")[0];
var score = document.getElementById("score");
var addTodoButton = document.getElementById("addToDoItemButton");
var enteredTodo = document.getElementById("enteredTodo");
var todoListContainer = document.getElementById("todoListContainer");
var errorNode = document.getElementById("errorNode");
addButton.addEventListener("click", function () {
    var scoreValue = parseInt(score.innerHTML);
    score.innerHTML = scoreValue + 1;
});
subtractButton.addEventListener("click", function () {
    if (score.innerHTML === "0") {
        return;
    }
    else {
        var scoreValue = parseInt(score.innerHTML);
        score.innerHTML = scoreValue - 1;
    }
});
enteredTodo.addEventListener("keyup", function () {
    errorNode.innerHTML = "";
});
addTodoButton.addEventListener("click", function () {
    if (enteredTodo.value) {
        var todo = enteredTodo.value;
        var listItem = document.createElement("li");
        listItem.setAttribute("class", "todoItem");
        listItem.innerHTML = todo;
        todoListContainer.append(listItem);
    }
    else {
        errorNode.innerHTML = "please enter a todo";
    }
})(function () {
    var time = new Date("d-m-y");
    console.log(time);
})();
