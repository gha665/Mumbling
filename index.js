//working solution for codewars
function accum(s) {
  var letters = s.split(""),
    words = [];

  for (var i = 0; i < letters.length; i++) {
    words.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }

  return words.join("-");
}

// function accum(s) {
//   let totalString = "";
//   let characters = s.split("");
//   //splits characters
//   for (i = 0; i < characters.length; i++) {
//     let characterSubstring = ""; //2 for loops for comparison
//     for (j = 0; j < i + 1; j++) {
//       let letterToAdd = "";
//       if (j === 0) {
//         letterToAdd = characters[i].toUpperCase();
//       } else {
//         letterToAdd = characters[i].toLowerCase();
//       }
//       characterSubstring += letterToAdd;
//     }
//     totalString += characterSubstring + "-";
//   }

//   totalString = totalString.slice(0, -1); //slice index to start end is index before which to end extraction
//   return totalString;
// }
