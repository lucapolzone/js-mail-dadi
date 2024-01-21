const mailList = [
  "mario.rossi@email.com",
  "mario.bianchi@email.com",
  "nicolo.pincopallo@email.com",
  "sara.esempio@email.com",
  "giacomo.cognome@email.com",
];

//Bottone Accedi
const checkButton = document.getElementById("login");

// Feedback
const feedback = document.getElementById("feedback");

//il bottone verifica se la mail è registrata
checkButton.addEventListener("click", function () {
  
// Input element
const mailUser = document.getElementById("mail-user").value;

// Flag per verificare se la mail è stata trovata
let mailFound = false;

  for (let i = 0; i < mailList.length; i++) {
    if (mailUser == mailList[i]) {
      console.log("Mail trovata");
      feedback.innerText = `La tua mail risulta registrata`;
      mailFound = true;
      break;
    } 
  }
  
  if (!mailFound) {
    console.log("Mail NON trovata");
    feedback.innerText = `La tua mail NON risulta registrata`;  
  }
  
});
