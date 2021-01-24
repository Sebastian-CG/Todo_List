const form = document.querySelector("#todo_form");
const todo_list = document.querySelector("#todo_list");
const todos = [];

const limpiarInput = () => todo.value = "";

const obtenerInput = () => {
    const todo = document.querySelector("#todo");
    const todoText = todo.value;
    todos.push(todoText);
    console.log(todos);
}

const imprimirTodo = () => {
    const todosTemplate = todos.map(t => `<li>${t}</li>`);
    todo_list.innerHTML = todosTemplate.join("")
}

form.addEventListener("submit", e => {
    e.preventDefault();
    obtenerInput();
    imprimirTodo();
    limpiarInput();
})