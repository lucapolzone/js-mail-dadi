# Esercizio: JS Mail & Dadi (12/01/2024)
nome repo: `js-mail-dadi`

## Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.


## Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

>Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

## Consigli del giorno

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. Sì, ma noi cosa vogliamo fare?
4. Torniamo a scrivere in italiano
5. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

<br>

# Svolgimento

## Mail

- Creo una lista (array) di account email

- Richiamo gli elementi html che mi servono
  - un elemento bottone per il calcolo
  - un elemento titolo per il feedback del calcolo

- Creo una funzione sul bottone
  - Vado a verificare tutti gli account email presenti nell'array
    - *SE* la mail è presente: la mail risulta è registrata
    - *ALTRIMENTI* la mail non risulta registrata

## Dadi

- Richiamo l'elemento html "Bottone"
- Richiamo l'elemento l'elemento html "Risultato partita"
- Creo una funzione sul bottone
  - Genero un numero randomico da 1 a 6 per il giocatore
  - Genero un numero randomico da 1 a 6 per il computer
  - *SE* il punteggio del giocatore è più alto vince
  - *SE* il punteggio del giocatore è più basso perde
  - *ALTRIMENTI* è un pareggio