$('#cipher').on('click', function() {
  let lettersLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let lettersUpp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let toCipher = $("#deciphered").val();
  let key = $("#key").val();
  key = Number(key);
  let arr = toCipher.split('');
  let cipheredLetters = [];

  for (let i = 0; i < toCipher.length; i++) {
    let lowercase = lettersLow.indexOf(arr[i]);
    let uppercase = lettersUpp.indexOf(arr[i]);

    if (lowercase === -1 && uppercase === -1) {
      cipheredLetters.push(arr[i]);
    } else if (lowercase >= 0) {
      let dif = lowercase - key;
      if (dif >= 0) {
        cipheredLetters.push(lettersLow[dif]);
      } else {
        dif += 26;
        cipheredLetters.push(lettersLow[dif]);
      }
    } else if (uppercase >= 0){
      let dif = uppercase - key;
      if (dif >= 0) {
        cipheredLetters.push(lettersUpp[dif]);
      } else {
        dif += 26;
        cipheredLetters.push(lettersUpp[dif]);
      }
    }
  }

  toCipher = cipheredLetters.join('');
  $("#ciphered").val(toCipher);
});

$('#decipher').on('click', function() {
  let lettersLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let lettersUpp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let toCipher = $("#ciphered").val();
  let key = $("#key").val();
  key = Number(key);
  let arr = toCipher.split('');
  let cipheredLetters = [];

  for (let i = 0; i < arr.length; i++) {
    let lowercase = lettersLow.indexOf(arr[i]);
    let uppercase = lettersUpp.indexOf(arr[i]);

    if (lowercase === -1 && uppercase === -1) {
      cipheredLetters.push(arr[i]);
    } else if (lowercase >= 0) {
      let dif = lowercase + key;
      if (dif <= 25) {
        cipheredLetters.push(lettersLow[dif]);
      } else {
        dif -= 26;
        cipheredLetters.push(lettersLow[dif]);
      }
    } else if (uppercase >= 0){
      let dif = uppercase + key;
      if (dif <= 25) {
        cipheredLetters.push(lettersUpp[dif]);
      } else {
        dif -= 26;
        cipheredLetters.push(lettersUpp[dif]);
      }
    }
  }

  toCipher = cipheredLetters.join('');
  $("#deciphered").val(toCipher);
});
