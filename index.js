function accum(s) {
  
  let totalString = "";
  let characters = s.split("");
  
  for (i = 0; i < characters.length; i++) {
    let characterSubstring = "";
    for (j = 0; j < (i + 1); j++) {
      let letterToAdd = "";
      if (j === 0) {
        letterToAdd = characters[i].toUpperCase();
      } else {
        letterToAdd = characters[i].toLowerCase();
      }
      characterSubstring += letterToAdd;
    }
    totalString += characterSubstring + "-";
  }
  
  totalString = totalString.slice(0, -1); 
  return totalString;
}
