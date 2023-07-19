function createOption(key, ...elements) {
    elements.forEach(element => {
        const option = document.createElement('option');
        option.textContent = key;
        element.append(option);
    })
}

export function initOption(data,inputUnit, outputUnit) {
    Object.keys(data).forEach(key => createOption(key,inputUnit, outputUnit));
}
