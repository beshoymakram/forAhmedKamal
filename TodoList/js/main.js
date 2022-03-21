var item = {};
var todo_items = [];
var current_items = [];
var display = ``;

current_items = JSON.parse(localStorage.getItem('todo_items'));



function getCurrentItems()
{
for(var i = 0 ; i < current_items.length ; i++) {
    display += `
    <tr>
    <td>${i+1}</td>
                <td>${current_items[i].name}</td>
                <td>
                    <button class="edit">Edit</button>
                    <button onclick="removeItem(${i})" class="delete">Delete</button>
                </td>
                </tr>
    `
}
document.getElementById('table').innerHTML = display;
display = ``;
}

getCurrentItems();

function setCurrentItems()
{
    localStorage.setItem('todo_items', JSON.stringify(todo_items));
}

function getItemName()
{
    item.name = document.getElementById('item-name').value;
}
function addItem()
{
    if(localStorage.getItem('todo_items')){
        getItemName();
        todo_items = current_items;
        todo_items.push(item);
        setCurrentItems();
        item = {};
        getCurrentItems();
    }else {
        getItemName();
        todo_items.push(item)
        current_items = todo_items;
        setCurrentItems();
        item = {};
        getCurrentItems();
    }
}

function removeItem(index)
{
    current_items.splice(index,1);
    todo_items = current_items;
    setCurrentItems();
    getCurrentItems();
}