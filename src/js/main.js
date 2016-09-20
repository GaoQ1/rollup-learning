import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';


const result1 = sayHelloTo('Jason');
const result2 = addArray([1, 2, 3, 4]);

const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayHelloTo('Jason') => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}`;