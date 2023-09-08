const addButton = document.getElementsByClassName("addButton")[0];
const subtractButton = document.getElementsByClassName("minusButton")[0];
let score:any = document.getElementById("score");
const addTodoButton:any = document.getElementById("addToDoItemButton");
const enteredTodo:any=document.getElementById("enteredTodo");
const todoListContainer:any = document.getElementById("todoListContainer");
const errorNode:any = document.getElementById("errorNode");



addButton.addEventListener("click",():void=>{
  
let scoreValue = parseInt(score.innerHTML)
score.innerHTML=scoreValue+1
})

subtractButton.addEventListener("click",():void=>{
  
   if(score.innerHTML==="0"){
    return
   }else{
    let scoreValue = parseInt(score.innerHTML);
    score.innerHTML=scoreValue - 1;
   }
})
enteredTodo.addEventListener("keyup",()=>{
errorNode.innerHTML="";
})
addTodoButton.addEventListener("click",()=>{
    if(enteredTodo.value){
        const todo = enteredTodo.value;
        const listItem = document.createElement("li");
        listItem.setAttribute("class","todoItem");
        listItem.innerHTML = todo;
        todoListContainer.append(listItem);
    }else{
        errorNode.innerHTML="please enter a todo"
    }
 
})
(():void=>{
    let time = new Date("d-m-y");
    console.log(time);
})();