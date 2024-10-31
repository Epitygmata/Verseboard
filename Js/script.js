// Récupère le bouton et le body
const checkbox = document.getElementById('checkboxInput');
const body = document.body;

// Ajoute un écouteur d'événement pour le changement de mode
checkbox.addEventListener('change', function () {
  body.classList.toggle('dark-mode');
});
