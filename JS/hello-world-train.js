const obj1 = {
  x: 'h',
  y: 'n', 
  z: 'r',
}

const obj2 = {
  a: 'l',
  b: 'o', 
  z: 'd',
}

const obj3 = {
  y: 'e', 
  z: 'l',
  e: ' ',
  d: '!dlroW',
}

const helloWorld = (a, b, c) => {
  a.x = a.x.toUpperCase();
  c.d = c.d.split('').reverse().join('');

Object.assign(a, b, c);

 console.log(Object.values(a).join(''));

  return;
}

helloWorld(obj1, obj2, obj3);
