const addButton = document.getElementById('add')
const modalClose = document.getElementById('close')
const modalBox = document.getElementsByClassName('modal-box')[0]
const applyBtn = document.getElementById('apply')
const flexList2 = document.getElementsByClassName('flex-list-2')[0]
const storeBtn = document.getElementById('store')
const infoParagraph = document.getElementById('info')
const clearBtn = document.getElementById('clear-text')
let taskNo = 0

const createToDoFunction = () => {
    const flexCont = document.createElement('div')
    const titleMain = document.createElement('h2')
    const descMain = document.createElement('p')
    const closeTodo = document.createElement('button')
    const todoTitle = document.getElementById('title-todo').value
    const todoDesc = document.getElementById('desc-todo').value
    const taskInfo = {
        title: todoTitle,
        desc: todoDesc
    }
    window.localStorage.setItem(taskNo++, JSON.stringify(taskInfo))
    flexCont.className = 'todo-container'
    titleMain.id = 'todo-title'
    descMain.id = 'todo-desc'
    closeTodo.id = 'todo-close'
    titleMain.textContent = todoTitle
    descMain.textContent = todoDesc
    closeTodo.innerText = 'Click to delete this task'
    
    flexList2.append(titleMain, descMain, closeTodo)
    

    modalBox.classList.remove('modal-active')
    closeTodo.addEventListener('click', () =>{
        titleMain.remove()
        descMain.remove()
        closeTodo.remove()
    })
}
const accessLocalStorage = () => {
    window.location.href = 'store.html'
}
storeBtn.addEventListener('click', accessLocalStorage)
applyBtn.addEventListener('click', () => {
    if (document.getElementById('title-todo').value.length == '' || document.getElementById('desc-todo').value == '') {
        alert('TEXT FIELD CANNOT BE EMPTY!')
    }
    else if (document.getElementById('title-todo').value.length > 55 || document.getElementById('desc-todo').value.length > 101){
        alert('Title or desc cannot be greater than 55 or 100 charecters!')
    }
    else{
        createToDoFunction()
    }
})
clearBtn.addEventListener('click', () => {
    document.getElementById('title-todo').value = ''
    document.getElementById('desc-todo').value = ''
})
addButton.addEventListener('click', () =>{
    modalBox.classList.add('modal-active')
})
modalClose.addEventListener('click', () =>{
    modalBox.classList.remove('modal-active')
})

setInterval(() => {
    console.log(document.getElementById('title-todo').value.length);
}, 1000);

