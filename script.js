const input = document.getElementById('input');
const listContainer = document.getElementBuyId('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }else{
        let li = document.createElementElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()

    
}

listContainer.addEventListener('click', function{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
 