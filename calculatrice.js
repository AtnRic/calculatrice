// pour l'instant la touche % effectue l'opération modulo, pour changer l'opération et faire un pourcentage, il faudrait traiter le cas particulier de ce bouton dans le code ci-dessous

console.log("hello");

var calc = document.querySelector('.calculation');                         // la div d'affichage du calcul
var result1 = document.querySelector('.result');                           // la div de d'affichage de résultat
var buttons = document.querySelectorAll('button');                         // les boutons

// écouteurs d'événements pour tous les boutons
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log("button cliked !")
    });
});

// en on traite l'évènement en fonction du bouton
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = this.textContent;
        if (value === "=") {                                                // si le bouton = est cliqué
            try {                                                           // on tente d'évaluer l'opération
                console.log(calc.textContent)
                var result = eval(calc.textContent);
                result1.textContent = result;                               // on affiche le résultat
                calc.textContent = "";                                      // on clear l'affichage de l'opération
              } catch (e) {
                console.error("erreur dans l'opération", e);                // si l'opération n'est pas valide, on affiche "ERROR"
                result1.textContent = "ERROR";
              }
            
        }
        else if(value === "C"){                                             // si le bouton C est cliqué, on réinitialise l'affichage
            calc.textContent = "";
            result1.textContent = "";
        }
        else{
            calc.textContent += value;                                      // pour toous les autres boutons, on ajoute la valeur au contenu de l'affichage
        }
    });
});

// les entrées de clavier
document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {                                           // si la touche entrée est pressée, on tente d'évaluer l'opération
      console.log('La touche Entrée a été pressée.');
      try {
        console.log(calc.textContent)
        var result = eval(calc.textContent);
        result1.textContent = result;                                       // on affiche le résultat
        
      } catch (e) {
        console.error("erreur dans l'opération", e);
        result1.textContent = "ERROR";
      }
    }


    // correction
    else if (event.code === 'Backspace') {                                  // si c'est la touche espace, on supprime le dernier caractère le l'opération
        console.log('La touche retour a été pressée.');
        calc.textContent = calc.textContent.slice(0, -1); //correction
    }
  });
  