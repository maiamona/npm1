// console.log(this);
// console.log(module);

const path = require('path');

// console.log(__filename);//nome do arquivo atual
// console.log(__dirname);// nome da pasta atual
console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname, '..', '..'));
console.log(path.resolve(__dirname, '.', '.'));
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));