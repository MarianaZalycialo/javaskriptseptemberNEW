let usersBlock = document.querySelector('.users');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users){
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name}`;
            userDiv.appendChild(div);
            let a = document.createElement('a'); // <a></a>
            a.href = `user-details/user-details.html?id=${user.id}`; // <a href="user-details.html"></a>
            a.innerText = 'Клікніть тут'; // <a href="user-details.html">Клікніть тут</a>
            userDiv.appendChild(a); // <div class='users'><a href="user-details.html">Клікніть тут</a></div>
            usersBlock.append(userDiv);
        }

    });
