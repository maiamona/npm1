const nome = 'Mona';
const sobrenome = 'Garcia';

// const falaNome = () => {
//     return `${nome} ${sobrenome}`
// }

// // console.log(module);//'module' é do node, não é do javascript

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'o que eu quiser exportar';

// // console.log(module.exports);
// // console.log(exports);

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

// exports.Pessoa = Pessoa;

module.exports = {
nome, sobrenome, Pessoa
}

// exports = { erro
// nome, sobrenome, Pessoa
// }