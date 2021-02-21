// Напишите функцию, которая разделяет массив
// на части заданного размера.

const data = [1, 3, 5, 6, 7, 8, 5, 3, 2, 4, 7, 9, 4];

const chunk = (arr, size) => arr.reduce((acc, item) => {
   const nextArray = acc[acc.length - 1];
   if (nextArray.length < size) {
      nextArray.push(item);
   } else {
      acc.push([item]);
   }
   return acc;
}, [[]]);

console.log(chunk(data, 2));
console.log(chunk(data, 3));
console.log(chunk(data, 4));


