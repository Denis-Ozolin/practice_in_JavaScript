
// Напишите функцию unique(arr),
// которая возвращает массив,
// содержащий только униикальные элементы arr.

const array = [5, 6, 3, 6, 3, 8, 8, 4, 7, 9];
const stringArray = ['Qiwi', 'Poly', 'Mango', 'Qiwi', 'Ajax', 'Poly'];
                    // **************
// const unique = arr => {
//     const result = [];
//     for (const item of arr) {
//         if (result.includes(item)) {
//             continue;
//         }
//         result.push(item);
//     }
//     return result;
// }

                    // **************
// const unique = arr => {
//     const result = [];
//     arr.forEach(item => {
//         if (result.includes(item)) {
//             return;
//         }
//          result.push(item);
//     })       
//     return result;
// }

                    // ****************
// const unique = arr => arr.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//        acc.push(item);
//     }   
//     return acc;
// }, [])

                    // ***************
// const unique = arr => arr
//     .filter((item, index, array) => 
        // array.indexOf(item) === index);                    

                    // ***************
// const unique = (arr) => [...new Set(arr)];

// const test = new Set(array);
// console.log('test: ', test); 
//возвращает обьект с уникальными значениями.

                    // ****************
const unique = arr => arr
   .filter((item, _index, array) =>
      array.indexOf(item) === array.lastIndexOf(item));
        // Только те, которые не повторяются в массиве.

console.log(unique(array));
console.log(unique(stringArray));

