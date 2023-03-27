class BaseCalculator {
  constructor() {
    const lastCalculation = [];
  }
    
  addToInput(charClicked) {
    document.querySelector('.calculation').textContent += charClicked;
  }

  removeLastInput(){
    const chars = document.querySelector('.calculation').textContent.split('')
    if(chars.length == 0){
      if(this.lastCalculation.length != 0){                                                           // si le calcul précédent a été mémorisé et que le calcul actuel est vide
        document.querySelector('.calculation').textContent= this.lastCalculation.join("")             // on l'affiche
        return
      }
    }
    chars.pop();
    document.querySelector('.calculation').textContent= chars.join("")
  }
    
  clearInput() {
    document.querySelector('.calculation').textContent = "";
  }
  clearResult() {
    document.querySelector('.result').textContent = "";
  }
    
   computeResult() {
    var input = document.querySelector('.calculation').textContent;
    try {
      var result = eval(input);
      this.lastCalculation = input.split('')                                                // on sauvegarde le dernier calcul
      console.log(this.lastCalculation)
      document.querySelector('.result').textContent = result;                               // on affiche le résultat
      document.querySelector('.calculation').textContent = "";                              // on clear l'affichage de l'opération
    } catch {
      console.error("erreur dans l'opération");                                             // si l'opération n'est pas valide, on affiche "ERROR"
      document.querySelector('.result').textContent = "ERROR";
    }
    this.clearInput();
  }
}
let baseCalculator = new BaseCalculator();