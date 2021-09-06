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
        request_index();
    });
}