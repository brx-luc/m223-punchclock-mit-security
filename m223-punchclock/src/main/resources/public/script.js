const URL = 'http://localhost:8081';
let entries = [];
let tasks = [];
let mode = 'create';
let currentEntry;

const dateAndTimeToDate = (dateString, timeString) => {
    return new Date(`${dateString}T${timeString}`).toISOString();
};

const populateDropdown = () =>{
    fetch(`${URL}/tasks`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            tasks = result;
            for (let i = 0; i <tasks.length; i++){
                let options = tasks[i]['taskName'];
                let value = tasks[i]['id'];
                let el = document.createElement("option");
                el.textContent = options;
                el.value = options;
                document.getElementById("dropdown").appendChild(el);
            }
        });
    });

}
const populateDropdownUsers = () =>{
    fetch(`${URL}/users`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            users = result;
            for (let i = 0; i <users.length; i++){
                let options = users[i]['username'];
                let value = users[i]['id'];
                let el = document.createElement("option");
                el.textContent = options;
                el.value = options;
                document.getElementById("user").appendChild(el);
            }
        });
    });
}

// API Requests
const createEntry = (entry) => {
    fetch(`${URL}/entries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    }).then((result) => {
        result.json().then((entry) => {
            entries.push(entry);
            renderEntries();
        });
    });
};

const indexEntries = () => {
    fetch(`${URL}/entries`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            entries = result;
            renderEntries();
        });
    });
    renderEntries();
};

const deleteEntry = (id) => {
    fetch(`${URL}/entries/${id}`, {
        method: 'DELETE'
    }).then((result) => {
        indexEntries();
    });
};

const updateEntry = (entry) => {
    fetch(`${URL}/entries/${entry.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    }).then((result) => {
        result.json().then((entry) => {
            console.log(result);
            entries = entries.map((e) => e.id === entry.id ? entry : e);
            renderEntries();
        });
    });
}

// Rendering
const resetForm = () => {
    const entryForm = document.querySelector('#entryForm');
    entryForm.reset();
    mode = 'create';
    currentEntry = null;
}

const saveForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entry = {};
    entry['checkIn'] = dateAndTimeToDate(formData.get('checkInDate'), formData.get('checkInTime'));
    entry['checkOut'] = dateAndTimeToDate(formData.get('checkOutDate'), formData.get('checkOutTime'));
    entry['task'] = {id:formData.get(tasks['id'])};
    entry['user'] = {id:formData.get(users['id'])};

    if (mode === 'create') {
        createEntry(entry);
    } else {
        entry.id = currentEntry.id;
        updateEntry(entry);
    }
    resetForm();
}

const editEntry = (entry) => {
    mode = 'edit';
    currentEntry = entry;

    const entryForm = document.querySelector('#entryForm');
    const checkInDateField = entryForm.querySelector('[name="checkInDate"]');
    checkInDateField.value = entry.checkIn.split('T')[0];
    const checkInTimeField = entryForm.querySelector('[name="checkInTime"]');
    checkInTimeField.value = entry.checkIn.split('T')[1].slice(0, -3);
    const checkOutDateField = entryForm.querySelector('[name="checkOutDate"]');
    checkOutDateField.value = entry.checkOut.split('T')[0];
    const checkOutTimeField = entryForm.querySelector('[name="checkOutTime"]');
    checkOutTimeField.value = entry.checkOut.split('T')[1].slice(0, -3);
}

const createCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

const createActions = (entry) => {
    const cell = document.createElement('td');

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteEntry(entry.id));
    cell.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => editEntry(entry));
    cell.appendChild(editButton);

    return cell;
}

const renderEntries = () => {
    const display = document.querySelector('#entryDisplay');
    display.innerHTML = '';
    entries.forEach((entry) => {
        const row = document.createElement('tr');
        row.appendChild(createCell(entry.id));
        row.appendChild(createCell(new Date(entry.checkIn).toLocaleString()));
        row.appendChild(createCell(new Date(entry.checkOut).toLocaleString()));
        row.appendChild(createCell(entry.task));
        row.appendChild(createCell(entry.user));
        row.appendChild(createActions(entry));
        display.appendChild(row);
    });
};

document.addEventListener('DOMContentLoaded', function(){
    const entryForm = document.querySelector('#entryForm');
    entryForm.addEventListener('submit', saveForm);
    entryForm.addEventListener('reset', resetForm);
    indexEntries();
    populateDropdown();
    populateDropdownUsers();

});