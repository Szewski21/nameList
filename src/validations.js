export function validateName(name) {
    const nameLenghtIsCorrenct = /^[a-zA-Z]+$/.test(name) && name.length >= 3 && name.length <= 13;
    return nameLenghtIsCorrenct;
}