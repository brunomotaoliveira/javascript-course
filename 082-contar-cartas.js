let count = 0;
// minha solucao
function cc(card) {
  // Altere apenas o código abaixo desta linha
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if(count <= 0) {
    return count + " Hold";
  } else {
    return count + " Bet";
  }
   
  // Altere apenas o código acima desta linha
}

cc(2); cc(3); cc(7); cc('K'); cc('A');



// segunda forma de fazer - solucao da freecodecamp
function cc2(card) {
    // Only change code below this line
    var regex = /[JQKA]/;
    if (card > 1 && card < 7) {
      count++;
    } else if (card === 10 || regex.test(card)) {
      count--;
    }
  
    if (count > 0) return count + " Bet";
    return count + " Hold";
  
    // Only change code above this line
  }