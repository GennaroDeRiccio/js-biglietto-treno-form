// Es. Biglietto treno

let conferma = document.getElementById("btn-invio");
let num_km = document.getElementById("num_km");
let eta = document.getElementById("eta");

let form = document.querySelector("form");

form.addEventListener("submit", function () {
  event.preventDefault();
  let calc_km = num_km.value * 0.21;
  prezzo = calc_km;
  if (eta.value < 18) {
    let sconto = calc_km * 0.2;
    prezzo = calc_km - sconto;
    document.getElementById("sconto").innerHTML =
      "Hai ottenuto uno sconto del 20%";
  } else if (eta.value > 65) {
    let sconto = calc_km * 0.4;
    prezzo = calc_km - sconto;
    document.getElementById("sconto").innerHTML =
      "Hai ottenuto uno sconto del 40%";
  }

  document.getElementById("prezzo").innerHTML = "Il prezzo è: " + prezzo.toFixed(2) + "€";
});
