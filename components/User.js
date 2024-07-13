export function addUser(item) {
    const box = document.createElement('div');
    const name = document.createElement('span')
    const age = document.createElement('span')
    const age_word = document.createElement('span')
    const cfourcfour = document.createElement('div')

    cfourcfour.classList.add('line')
    box.classList.add('box');
    name.innerHTML = item.name;
    age.innerHTML = item.age;
    age_word.innerHTML="age"

    box.append(name,cfourcfour)
    cfourcfour.append(age_word,age)
    return box;
}

