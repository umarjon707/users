export function reload(data, component, place1, place2, place3) {
    place1.innerHTML = "";
    place2.innerHTML = "";
    place3.innerHTML = "";

    for (let item of data) {
        const comp = component(item);
        if (item.age <= 25) {
            place1.append(comp);
        } else if (item.age <= 50) {
            place2.append(comp);
        } else {
            place3.append(comp);
        }
    }
}
