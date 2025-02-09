//Crea una funzione che accetta due parametri: firstName, lastName.
//La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.

function creaNome ( firstName , lastName) {
    return {
        firstName : firstName,
        lastName : lastName

    };
}

// Esportiamo la funzione per poterla usare in altri file
module.exports = creaNome;

