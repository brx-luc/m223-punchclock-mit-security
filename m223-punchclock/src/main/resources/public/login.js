let departments = [];
const URL = 'http://localhost:8081';
let users = [];
const populateDropdownDepartment = () =>{
    fetch(`${URL}/departments`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            departments = result;
            for (let i = 0; i <departments.length; i++){
                let options = departments[i]['departmentName'];
                let el = document.createElement("option");
                el.textContent = options;
                el.value = options;
                document.getElementById("department").appendChild(el);
            }
        });
    });
}

const createUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {};
    user['username'] = formData.get('username');
    user['password'] = formData.get('password');
    user['department'] = {id:formData.get('departmentName')};

    fetch(`${URL}/users/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    });
    console.log(user);
};

let resp = {};
let bearer_token ="";
const login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {};
    user['username'] = formData.get('username');
    user['password'] = formData.get('password');
    fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((result) => {
        resp = result;
        console.log(result);
        bearer_token = result.headers.get('authorization');
        localStorage.setItem('bearer', bearer_token);
        console.log(bearer_token);
    });
}
document.getElementById('login').addEventListener('click',login);
document.addEventListener('DOMContentLoaded', function(){
    const entryForm = document.querySelector('#entryForm');
    entryForm.addEventListener('submit', createUser);
    populateDropdownDepartment();
});