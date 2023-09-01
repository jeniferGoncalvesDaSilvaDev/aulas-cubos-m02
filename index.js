//faz a importaçao de uma biblioteca ou arquivo 
const lodash = require ('lodash');
const array =[1,2,3,4,4,5,6,7,1];
//faz a soma do array
console.log(lodash.sum(array));
//para exibir os numeros de forma unica com lodash 
// usa-se o metodo uniq()
const arrayUnico = lodash.uniq(array);
//soma desse array 
const soma = lodash.sum(arrayUnico);
console.log(arrayUnico);
console.log(soma);
//importando o array.js

const arrayImportado = require ('./array.js');
console.log(arrayImportado);