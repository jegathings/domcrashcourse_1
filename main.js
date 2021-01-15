let form = document.querySelector('#addForm')
let itemList = document.querySelector('#items')
let filter = document.querySelector('#filter')

form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)

function addItem(e){
    e.preventDefault();
    let newItem = document.querySelector('#item').value
    let li = document.createElement('li')
    li.className= 'list-group-item'
    li.appendChild(document.createTextNode(newItem))
    let deleteBtn = document.createElement('button')
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)
    itemList.appendChild(li)
}

function removeItem(e){
    console.log("Class list")
    console.log(e.target.classList)
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

function filterItems(e){
    let text = e.target.value.toLowerCase()
    console.log(text)
    let items = itemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}