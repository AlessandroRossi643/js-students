// Creazione Oggetto Studente; nome, cognome, età
var studente={
  nome: "Alessandro",
  cognome: "Rossi",
  eta: 22
};

// Stampa dati Studente
for (var field in studente) {
  console.log(studente[field]);
}

console.log("--------------------");

// Creazione array Studenti
var lista_studenti=[
  {
    "nome":"Maurizio",
    "cognome":"Pisciottu",
    "eta":26
  },

  {
    "nome":"Patrizia",
    "cognome":"Dindelli",
    "eta": 62
  }
]

lista_studenti.push(studente);

// Funzione che mi permette di stampare la lista dell'array
function stampalistastudenti(array){
  for (var i = 0; i < array.length; i++) {
    console.log(array[i].nome + " "+ array[i].cognome);
  }

}

// Stampa nome & cognome array studenti
stampalistastudenti(lista_studenti);

console.log("--------------------");

//Inserimento dati nuovo Studente
var nomeutente=prompt("Inserisci un nome");
var cognomeutente=prompt("Inserisci un cognome");
var etautente=parseInt(prompt("Inserisci un'età"));

// Creazione oggetto nuovoStudente
var nuovoStudente={
  "nome": nomeutente,
  "cognome": cognomeutente,
  "eta": etautente
}

// Inserimento dell'oggetto nuovoStudente nella lista degli studenti
lista_studenti.push(nuovoStudente);

stampalistastudenti(lista_studenti);
