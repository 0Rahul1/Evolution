function countVowelsAndConsonants(str) {

  str = str.toLowerCase();
  

  let vowels = 0;
  let consonants = 0;
  

  const vowelList = 'aeiou';
  

  for (let char of str) {
    
    if (/[a-z]/.test(char)) {
      if (vowelList.includes(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  

  return { vowels, consonants };
}

// Test the function
const result = countVowelsAndConsonants("Hello World!");
console.log(result);