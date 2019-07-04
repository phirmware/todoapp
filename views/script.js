const todo = document.getElementById('todo-input');
const btn = document.getElementById('todo-btn');
const list = document.getElementById('list');
var myTodo;
var deleteBtn = document.getElementsByClassName('delete');
// fetch('/api/todo').then(response => {
//     return response.json();
// }).then(todos => {
//     console.log(todos);
//     for (let i = 0; i < todos.length; i++) {
//         const list = document.getElementById('list');
//         list.insertAdjacentHTML('beforeend', `<li>${todos[i].todo}</li>`);
//     }
// });

// get todos
$.get('/api/todo', (todos) => {
    console.log(todos);
    for (let i = 0; i < todos.length; i++) {
        list.insertAdjacentHTML('beforeend', `<li onClick='deleteTodo("${todos[i]._id}")' class="list-todo" data-id="${todos[i]._id}">${todos[i].todo} <button class="delete">delete</button></li>`);
    }
});


btn.addEventListener('click', () => {
    const data = todo.value;
    todo.value = '';
    if (data == '') return;
    $.post('/api/todo', { todo: data }, (response) => {
        console.log(response.statusCode);
        if (response.statusCode == 200) {
            list.insertAdjacentHTML('beforeend', `<li onClick='deleteTodo("${response.data._id}")' class="list-todo" data-id="${response.data._id}">${response.data.todo} <button class="delete">delete</button></li>`);
            deleteBtn = document.getElementsByClassName('delete');
        }
    });
});

// for(let i = 0; i < deleteBtn.length; i++){
//     deleteBtn[i].addEventListener('click',()=>{
//         console.log('CLicked');
//     });
// }

function deleteTodo(id) {
    $.post('/api/todo/delete', { id: id }, (response) => {
        if (response) {
            list.innerHTML = '';
            // get todos
            $.get('/api/todo', (todos) => {
                console.log(todos);
                for (let i = 0; i < todos.length; i++) {
                    list.insertAdjacentHTML('beforeend', `<li onClick='deleteTodo("${todos[i]._id}")' class="list-todo" data-id="${todos[i]._id}">${todos[i].todo} <button class="delete">delete</button></li>`);
                }
            });
        }
    });
}








