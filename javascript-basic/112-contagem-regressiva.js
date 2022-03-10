// Altere apenas o código abaixo desta linha
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(countdown(10));
  // Altere apenas o código acima desta linha