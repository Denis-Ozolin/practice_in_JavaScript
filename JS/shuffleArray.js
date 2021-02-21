// Напишите функцию shuffle,
// которая принимает массив и возвращает новый 
// с теми же элементами, но в случайном порядке.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shuffle = (arr) => {
   const shuffleArray = [...arr];
   shuffleArray.sort(() => Math.random() - 0.5);
   return shuffleArray;
}

console.table(shuffle(numbers));
console.table(shuffle(numbers));

