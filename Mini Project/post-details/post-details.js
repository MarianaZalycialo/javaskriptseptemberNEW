let url = new URL(location.href);
let id = url.searchParams.get('id');


let commentsBlock = document.querySelector('.comments');
let postBlock = document.querySelector('.post');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(value => value.json())
    .then(post =>{
        let div = document.createElement('div');
        div.innerText = `${post.title} `;
        div.classList.add('name');
        let divBody = document.createElement('div');
        divBody.innerText = `${post.body} `;
        divBody.classList.add('body');
        postBlock.append(div, divBody);
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(value => value.json())
    .then(comments =>{
        for (const comment of comments) {
            let divBlock = document.createElement('div');
            divBlock.classList.add('comment');
            let div = document.createElement('div');
            div.innerText = `${comment.name} `;
            div.classList.add('name');
            let divBody = document.createElement('div');
            divBody.innerText = `${comment.body} `;
            divBody.classList.add('body');
            divBlock.append(div, divBody);
            commentsBlock.appendChild(divBlock);
        }
    });