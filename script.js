// Es. Biglietto treno

let nome = document.getElementById("name");
let conferma = document.getElementById("btn-invio");
let num_km = document.getElementById("num_km");
let eta = document.getElementById("eta");

let form = document.querySelector("form");

 nome_passeggero = document.getElementById("passeggero");

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
  nome_passeggero = nome;
  passeggero.innerText = "Passeggero: " + nome_passeggero.value;
  document.getElementById("prezzo").innerHTML = "Il prezzo è: " + prezzo.toFixed(2) + "€";
});
