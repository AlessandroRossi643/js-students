// Creazione Oggetto Studente; nome, cognome, età
var studente={
  "nome": "Alessandro",
  "cognome": "Rossi",
  "eta": 22
}

// Stampa dati Studente
for (var field in studente) {
  console.log(studente[field]);
}
