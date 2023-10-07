const input = document.getElementById('input');
const listContainer = document.getElementBuyId('list-container');
function addTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }else{
        let li = document.createElementElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    
}