const URL = 'http://localhost:8081';
let users = [];
let bearer = "";
const createUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {};
    user['password'] = formData.get('username');
    user['username'] = formData.get('password');

    fetch(`${URL}/users/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((result) => {
        result.json().then((user) => {
            users.push(user);
        });
    });
};

const login = (e) =>
{

}
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', createUser);
