// Importiamo le funzioni dai file names.js e hobbies.js
const creaNome = require('./names')
const creaHobbies = require('./hobbies')

function creaPersona() {
    const fullName = creaNome("Luca", "Marras")
    const hobbies = creaHobbies("Viaggiare", "Leggere", "Basket") 

    return {
        fullName: fullName,
        hobbies: hobbies
    };
}

console.log(creaPersona());