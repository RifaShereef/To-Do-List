let addToDoButton = document.getElementById('addbutton');
let toDoContainer = document.getElementById('innerdiv-id');
let inputField = document.getElementById('input');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('outerdiv');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
