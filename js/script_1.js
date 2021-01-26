const form = document.querySelector("#todo_form"),
    todo_list = document.querySelector("#todo_list"),
    todos = [];

const limpiarInput = () => todo.value = "",

    obtenerInput = () => {
        const todo = document.querySelector("#todo"),
            todoText = todo.value;
        todos.push(todoText);
        console.log(todos);
    },

    imprimirTodo = () => {
        const todosTemplate = todos.map(t => `<li>${t}</li>`);
        todo_list.innerHTML = todosTemplate.join("")
    };

form.addEventListener("submit", e => {
    e.preventDefault();
    obtenerInput();
    imprimirTodo();
    limpiarInput();
})