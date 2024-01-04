// I did it like this but it didnt account for all edge cases and 
// it didnt look readable but passed tests
const mergeAlternately1 = (word1, word2) => {
    return word1.charAt(0)+word2.charAt(0)+word1.charAt(1)+word2.charAt(1)+word1.charAt(2)+word2.charAt(2)+word1.charAt(3)+word2.charAt(3)+word1.charAt(4)+word2.charAt(4)+word1.charAt(5)+word2.charAt(5); 
   };  
   //chat gpt refactored it like this and it makes so much sense
     const mergeAlternately = (word1, word2) => {
       const mergedArray = [];
       for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
         if (i < word1.length) mergedArray.push(word1.charAt(i));
         if (i < word2.length) mergedArray.push(word2.charAt(i));
       }
       return mergedArray.join('');
     };