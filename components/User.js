export function addUser(item) {
    const user = document.createElement('div');
    const span = document.createElement('span')
    user.classList.add('box');
    user.innerHTML = item.name;
    span.innerHTML= 'age: ' + item.age;
    user.append(span)
    return user;
}



