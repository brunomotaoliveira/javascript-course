const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Altere apenas o código abaixo desta linha
  if( par == 4 && strokes == 1 || par == 1 && strokes == 1) {
    return "Hole-in-one!";
  } else if ( par == 4 && strokes == 2 || par == 5 && strokes == 2) {
    return "Eagle";
  } else if ( par == 4 && strokes == 3) {
    return "Birdie";
  } else if ( par == 4 && strokes == 4 || par == 5 && strokes == 5) {
    return "Par";
  } else if ( par == 4 && strokes == 5) {
    return "Bogey";
  } else if ( par == 4 && strokes == 6) {
    return "Double Bogey";
  } else if ( par == 4 && strokes == 7 || par == 5 && strokes == 9) {
    return "Go Home!";
  }

  
  // Altere apenas o código acima desta linha
}

golfScore(5, 4);