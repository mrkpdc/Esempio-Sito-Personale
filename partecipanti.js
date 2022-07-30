
// Classe partecipante al corso
class Partecipante extends Persona {
    constructor (id, nome, cognome, dataNascita, email, immagine, idCorso) {
        super (id, nome, cognome, dataNascita, email, immagine);
        this.idCorso = idCorso;
    }
}

// Definisco alcuni partecipanti al corso
let p1 = new Partecipante('1', 'Mario', 'Mario', '01/01/1980', 'mario.mario@nintendo.com', 'img/mario.png', 'TDPC13');
let p2 = new Partecipante('2', 'Luigi', 'Mario', '01/01/1985', 'luigi.mario@nintendo.com', 'img/luigi.png', 'TDPC13');
let p3 = new Partecipante('3', 'Princess', 'Peach', '01/01/1987', 'princess.peach@nintendo.com', 'img/princess-peach.png', 'TDPC13');
let p4 = new Partecipante('4', 'Yoshisaur', 'Munchakoopas', '01/01/1981', 'yoshisaur.munchakoopas@nintendo.com', 'img/yoshi.png', 'TDPC13');

// Creo la lista dei partecipanti
let listaPartecipanti = [p1, p2, p3, p4];

//C'è un nuovo partecipante! lo definisco e lo aggiungo alla listaPartecipanti
let p5 = new Partecipante('5', 'Toad', 'Toad', '02/02/1996', 'toad@nintendo.com', 'img/toad.png', 'TPC13');
listaPartecipanti.push(p5);

// dichiaro la tabella dei partecipanti

const tabellaPartecipanti = document.getElementById('tabellaPartecipanti');

// creo le righe della tabella dinamicamente
// se aggiungo un partecipante la tabella si aggiornerà in automatico

// for (i = 0; i < listaPartecipanti.length; i++) {
//     tabellaPartecipanti.innerHTML += `
//         <tr>
//             <td>
//                 ${listaPartecipanti[i].id}
//             </td>
//             <td>
//                 ${listaPartecipanti[i].nome}          
//             </td>
//             <td>
//                 ${listaPartecipanti[i].cognome}
//             </td>
//             <td>
//                 ${listaPartecipanti[i].dataNascita}
//             </td>
//             <td>
//                 ${listaPartecipanti[i].email}
//             </td>
//             <td class="text-center img-fluid">
//                 <img src="${listaPartecipanti[i].immagine}" alt="${listaPartecipanti[i].nome + " " + listaPartecipanti[i].cognome}"> 
//             </td>
//             <td>
//                 ${listaPartecipanti[i].idCorso}
//             </td>
//         </tr>
//     `;
// };

// meglio con un forEach!

listaPartecipanti.forEach((element) => {
    tabellaPartecipanti.innerHTML += `
    <tr>
        <td>
            ${element.id}
        </td>
        <td>
            ${element.nome}          
        </td>
        <td>
            ${element.cognome}
        </td>
        <td>
            ${element.dataNascita}
        </td>
        <td>
            ${element.email}
        </td>
        <td class="text-center img-fluid">
            <img src="${element.immagine}" alt="${element.nome + " " + element.cognome}"> 
        </td>
        <td>
            ${element.idCorso}
        </td>
    </tr>
    `}
);

