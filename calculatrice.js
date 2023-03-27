// pour l'instant la touche % effectue l'opération modulo, pour changer l'opération et faire un pourcentage, il faudrait traiter le cas particulier de ce bouton dans le code ci-dessous

console.log("hello");
var calc = document.querySelector('.calculation');                         // la div d'affichage du calcul
var result1 = document.querySelector('.result');                           // la div de d'affichage de résultat


function addToInput(charClicked) {
  calc.textContent += charClicked;
}

function clearInput() {
  calc.textContent = "";
}
function clearResult() {
  result1.textContent = "";
}

function computeResult() {
  var input = calc.textContent;
  try {
    var result = eval(input);
    result1.textContent = result;                               // on affiche le résultat
    calc.textContent = "";                                      // on clear l'affichage de l'opération
  } catch {
    console.error("erreur dans l'opération");                // si l'opération n'est pas valide, on affiche "ERROR"
    result1.textContent = "ERROR";
  }
  clearInput();
}