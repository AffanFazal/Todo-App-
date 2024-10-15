const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const saveList = document.querySelector("#Save-List");
const todolist = [
    "NAMAZ",
    "practice",
    "github profile",
    "leetcode",

];
    

localStorage.setItem("list", JSON.stringify(todolist));

const list = JSON.parse(localStorage.getItem("list"));

console.log("list" , list);


todolist.map(function(value , index) {
    console.log( index, value);
     todoList.innerHTML += `<li>${value }</li>`
})


todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const Todo = event.target.children[0].value;

    todoList.innerHTML += `<li>${Todo} </li>`;
  

    event.target.reset();
    
});
