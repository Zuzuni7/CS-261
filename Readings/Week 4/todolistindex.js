
import {apiKey, apiURL, createItem} from './todo.js';


window.addEventListener('load', () => {
    const toDoListElement = document.getElementById('todoList');


    toDoListElement.appendChild(createItem('teach class'));

    console.log(apiKey);
    //console.log(apiURL);
});


