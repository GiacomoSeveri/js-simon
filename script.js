const daysMissing = document.getElementById("days");
const hoursMissing = document.getElementById("hours");
const minutesMissing = document.getElementById("minutes");
const secondsMissing = document.getElementById("seconds");

// aggiungo la data a cui voglio arrivare
const countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

// setto il tempo che deve scorrere
const xMas = setInterval(function() {

  // prendo la data di oggi
  const now = new Date().getTime();

  // trovo quanto ,anca tra oggi e il giorno stabilito
  const distance = countDownDate - now;

  // calcolo il tempo
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // stampo in pagina
  daysMissing.innerHTML = days + "d ";
  hoursMissing.innerHTML = hours + "h ";
  minutesMissing.innerHTML = minutes + "m ";
  secondsMissing.innerHTML = seconds + "s ";

  // scrivo un messaggio a fine countdown
  if (distance < 0) {
    clearInterval(xMas);
    document.getElementById("demo").innerHTML = "BUON NATALE!!!!!";
  }
}, 1000);