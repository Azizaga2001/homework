let button = document.querySelector('.button')
let cont = document.querySelector('#container')

cont.addEventListener('click', createBtn)

function createBtn(event) {
    console.log(event.target.tagName);
    if (event.target.tagName == 'BUTTON') {
        let newBtn = document.createElement('button')
        newBtn.className = 'button'
        newBtn.textContent = 'Add Button'
        cont.append(newBtn)
    }
}