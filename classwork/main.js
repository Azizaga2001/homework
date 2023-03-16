const form = document.querySelector('#form')
const btn = document.querySelector('#btn')
const commentBlock = document.querySelector('.comment-block')

btn.addEventListener('click', createComment)
commentBlock.addEventListener('click', (e) => {
    if (e.target.id == 'delete-btn') {
        deleteComment(e.target)
    }
})


function createComment(e) {
    e.preventDefault()

    let name = form.elements.username.value
    let date = form.elements.commentdate.value
    let comm = form.elements.comment.value

    commentBlock.innerHTML += `<div class="comment">
                                    <div class="info">
                                        <div class="text">
                                            <h3>${name}</h3>
                                            <p>${comm}</p>
                                        </div>
                                        <div class="date">
                                            ${date}
                                        </div>
                                    </div>
                                    <img id="delete-btn" src="./waste-basket.svg" alt="">
                                </div>`

    console.log(name, date, comm);
}

function deleteComment(btn) {
    btn.parentElement.remove();
}
