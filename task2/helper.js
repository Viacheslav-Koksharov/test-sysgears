export function createList(data) {
    const list = document.createElement('ul');

    for (let i = 0; i < data.length; i++) {
        const item = document.createElement('li');
        item.classList.add('item');

        for(const key in data[i]){
            const el = document.createElement('p');
            el.classList.add('text');
            el.textContent = data[i][key];
            item.append(el);
        }
        list.append(item);
    }
    return list
}
