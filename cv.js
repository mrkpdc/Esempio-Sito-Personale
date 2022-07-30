// popolo dinamicamente i dati anagrafici del CV

class PersonaCV extends Persona {
    constructor (id, nome, cognome, dataNascita, email, immagine, indirizzo, numeroTel) {
        super (id, nome, cognome, dataNascita, email, immagine)
        this.indirizzo = indirizzo;
        this.numeroTel = numeroTel;
    }
};


let persona1 = new PersonaCV ('1', 'Mario', 'Rossi', '01/01/1972', 'mario.rossi@photomario.com', 'img/avatar.jpg', 'Corso Laghi 151, 10051 Avigliana - TO', '011 9322333');

// Creo un array di persone dal quale posso prendere i dati per creare un nuovo CV se venisse richiesto
let listaPersone = [];
listaPersone.push(persona1);

let indexOfPersona = listaPersone.indexOf(persona1);

// Popolo dinamicamente i dati anagrafici del CV
const datiAnagraficiCV = document.getElementById('datiAnagraficiCV');
datiAnagraficiCV.innerHTML = `
<p><b>Nome: </b>${listaPersone[indexOfPersona].nome + ' ' + listaPersone[indexOfPersona].cognome}</p>
<p><b>Data di nascita: </b>${listaPersone[indexOfPersona].dataNascita}</p>
<p><b>Email: </b>${listaPersone[indexOfPersona].email}</p>
<p><b>Indirizzo: </b>${listaPersone[indexOfPersona].indirizzo}</p>
<p><b>Telefono: </b>${listaPersone[indexOfPersona].numeroTel}</p>
`;

