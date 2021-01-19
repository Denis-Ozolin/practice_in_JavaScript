//Первые буквы слова в верхнем регистре.
const wordsToUpCase = function (str) {
    const strArray = str.split(' ');
    const newArray = [];
    for (let i = 0; i < strArray.length; i += 1){
        const wordArray = strArray[i].split('');
        
        wordArray[0] = wordArray[0].toUpperCase();
   
        newArray.push(wordArray.join(''));
    }
    return newArray.join(' ');
} 

console.log(wordsToUpCase('i am in the easycode'));
console.log(wordsToUpCase('код пишется не для машины а для разработчика'));