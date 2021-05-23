import {ConsolePro} from "../ConsolePro";
// @ts-ignore
import {ProLogJs} from "../index.js";

console.log('-------------------------------- PROBANDO EL CÓDIGO --------------------------------')
console.log('-------------------------------- Console Instance --------------------------------')
const logger = new ConsolePro();
logger.log('Hola mundo', 'd');
logger.log('Hola mundo', 'D');
logger.log('Hola mundo', 'i');
logger.log('Hola mundo', 'w');
logger.log('Hola mundo', 's');
logger.log('Hola mundo', 'e');
logger.log('Hola mundo');

const loggerTwo = new ConsolePro('./log.log');
loggerTwo.log('Hola', 's');
loggerTwo.log('Hola', 'w');
loggerTwo.log('Hola', 'i');
loggerTwo.log('Hola', 'I');
loggerTwo.log('Hola', 'I');
loggerTwo.log('Hola', 'I');
loggerTwo.log('Hola', 'E');
loggerTwo.log('Hola', 'd');
loggerTwo.log('Hola', 'd');
loggerTwo.log('Hola', 'd');
loggerTwo.log('Hola', 'd');
loggerTwo.log('Hola');

console.log('-------------------------------- Console Static --------------------------------')
ConsolePro.log('Hello world!', 'd');
ConsolePro.log('Hello world!', 'D');
ConsolePro.log('Hello world!', 'i');
ConsolePro.log('Hello world!', 'w');
ConsolePro.log('Hello world!', 's');
ConsolePro.log('Hello world!', 'e');
ConsolePro.log('Hello world!');

console.log('-------------------------------- PROBANDO EL EXPORT --------------------------------')

ProLogJs.log('Hola', 's');