// Richiamo l'elemento html "Bottone"
const playButton = document.getElementById("play-button");

// Richiamo l'elemento l'elemento html "Risultato partita"
const gameResult = document.getElementById("game-result");

// Creo una funzione sul bottone
playButton.addEventListener("click", function() {

  //Genero un numero randomico da 1 a 6 per il giocatore
  let playerScore = Math.floor(Math.random() * 6 + 1);
  console.log(playerScore);
  
  //Genero un numero randomico da 1 a 6 per il computer
  let pcScore = Math.floor(Math.random() * 6 + 1);
  console.log(pcScore);

  if(playerScore > pcScore) {
    gameResult.innerText = `HAI VINTO! Hai fatto ${playerScore}, il computer ha fatto ${pcScore}`;
  } else if (playerScore < pcScore) {
    gameResult.innerText = `HAI PERSO! Il computer ha fatto ${pcScore}, tu hai fatto solo ${playerScore}`;
  } else {
    gameResult.innerText = `PAREGGIO! Entrambi avete fatto ${playerScore}`;
  }
});