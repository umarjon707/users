import { users } from "./lib/db.js";
import { addUser } from "./components/User.js";
import { reload } from "./lib/utils.js";

const under_twfi = document.querySelector('#under25');
const under_fif = document.querySelector('#under50');
const others = document.querySelector('#over50');
const userForm = document.forms.namedItem('users_form');

userForm.onsubmit = (e) => {
    e.preventDefault();
    const user = {
        name: new FormData(e.target).get('name'),
        age: Math.floor(new FormData(e.target).get('age'))
    };
    users.push(user);
    reload(users, addUser, under_twfi, under_fif, others);
};
