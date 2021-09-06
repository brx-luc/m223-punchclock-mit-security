let departments = [];
const URL = 'http://localhost:8081';
let users = [];
const populateDropdown = () =>{
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
    user['department'] = {id:formData.get(departments['departmentName'])};

    fetch(`${URL}/users/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    });
    console.log(user);
};

document.addEventListener('DOMContentLoaded', function(){
    const entryForm = document.querySelector('#entryForm');
    entryForm.addEventListener('submit', createUser);
    populateDropdown();
});