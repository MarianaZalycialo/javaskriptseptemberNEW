let url = new URL(location.href);
let id = url.searchParams.get('id');

let userBlock = document.querySelector('.block');
console.log(userBlock);
console.log(id);
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(value => value.json())
    .then(user => {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');

        console.log(user);
        let nameDiv = document.createElement('div');
        nameDiv.classList.add('name');
        nameDiv.innerText = `Name: ${user.name}`;
        let userNameDiv = document.createElement('div');
        userNameDiv.classList.add('user-name');
        userNameDiv.innerText = `UserName: ${user.username}`;
        let userIdDiv = document.createElement('div');
        userIdDiv.classList.add('user-id');
        userIdDiv.innerText = `Id: ${user.id}`;

        userDiv.append(nameDiv, userNameDiv, userIdDiv);

        let userInfoDiv = document.createElement('div');
        userInfoDiv.classList.add('info');

        let userPhoneSpan = document.createElement('span');
        userPhoneSpan.classList.add('phone');
        userPhoneSpan.innerText = `Phone: ${user.phone}`;

        let userEmailSpan = document.createElement('span');
        userEmailSpan.classList.add('email');
        userEmailSpan.innerText = user.email;

        let userWebsiteSpan = document.createElement('span');
        userWebsiteSpan.classList.add('website');
        userWebsiteSpan.innerText = user.website;

        userInfoDiv.append(userPhoneSpan,userEmailSpan,userWebsiteSpan);
        userDiv.append(userInfoDiv);

        let userAddressDiv = document.createElement('div');
        userAddressDiv.classList.add('address');

        let userCityDiv = document.createElement('div');
        userCityDiv.classList.add('city');
        userCityDiv.innerText = user.address.city;

        let userStreetDiv = document.createElement('div');
        userStreetDiv.classList.add('street');
        userStreetDiv.innerText = user.address.street;

        let userSuiteDiv = document.createElement('div');
        userSuiteDiv.classList.add('suite');
        userSuiteDiv.innerText = user.address.suite;

        let userZipcodeDiv = document.createElement('div');
        userZipcodeDiv.classList.add('zipcode');
        userZipcodeDiv.innerText = user.address.zipcode;

        userAddressDiv.append(userCityDiv,userCityDiv,userStreetDiv,userSuiteDiv,userZipcodeDiv);
        userDiv.append(userAddressDiv);
        userBlock.appendChild(userDiv);

        let button = document.createElement('button');
        button.innerText = 'post of current user';
        button.onclick = () => posts();
        userBlock.appendChild(button);


        function posts() {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                    .then(value => value.json())
                    .then(posts => {
                        let postsDiv = document.createElement('div');
                        postsDiv.classList.add('posts');

                        for (const post of posts) {
                            let postDiv = document.createElement('div');
                            postDiv.classList.add('post');
                            let div = document.createElement('div');// <div></div>
                            div.innerText = `${post.id} ${post.title}`;
                            postDiv.appendChild(div);
                            let a = document.createElement('a'); // <a></a>
                            a.href = `../post-details/post-details.html?id=${post.id}`; // <a href="user-details.html"></a>
                            a.innerText = 'Клікніть тут'; // <a href="user-details.html">Клікніть тут</a>
                            postDiv.appendChild(a);
                            postsDiv.appendChild(postDiv);
                        };

                        userBlock.appendChild(postsDiv);
                })



        }

    });


// <div className="user-name"></div>
// <div className="user-id"></div>
// <div className="info">
//     <span className="phone"></span>
//     <span className="email"></span>
// </div>