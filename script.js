document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("text");
  const loveButton = document.getElementById("loveButton");
  loveButton.style.display = "none";

  const text = `Hoy celebramos dos años de amor, risas y complicidad a pesar de la distancia física que nos separa. Aunque los kilómetros nos separan, nuestro amor ha demostrado ser más fuerte que cualquier obstáculo, y cada día que pasa, me doy cuenta de lo afortunado que soy de tenerte en mi vida.

  Eres mi apoyo, mi confidente, mi orgullo, mi mayor alegría, mi todo. Espero con ansias el día en que podamos celebrar nuestro aniversario cara a cara, pero mientras tanto, celebremos el amor que nos une a pesar de la distancia.

  Feliz segundo aniversario, mi amor. Te amo más de lo que las palabras pueden expresar y más de lo que muchas veces suelo mencionar.`;

  let index = 0;

  function displayText() {
      textElement.innerHTML = text.slice(0, index);
      index++;

      if (index <= text.length) {
          setTimeout(displayText, 40);
      } else {
          loveButton.style.display = "block";
      }
  }


  displayText();
});
