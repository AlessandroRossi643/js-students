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
var lista_studenti={
  nome:["Francesco","Niccolò","Luca","Maurizio"],
  cognome:["Poni","Rinaldini","Lanzi","Pisciottu"],
  eta:[23,21,25,39]
};

// Stampa nome & cognome array studenti
for (var i = 0; i < lista_studenti.nome.length; i++) {
  console.log(lista_studenti.nome[i] + " " + lista_studenti.cognome[i]);
}

console.log("--------------------");

//Inserimento dati nuovo Studente
lista_studenti.nome[4]=prompt("Inserisci un nome");
lista_studenti.cognome[4]=prompt("Inserisci un cognome");
lista_studenti.eta[4]=parseInt(prompt("Inserisci un'età"));
console.log(lista_studenti.nome[4] + " " + lista_studenti.cognome[4] + ", " + lista_studenti.eta[4]);
