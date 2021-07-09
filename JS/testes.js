class Person {
    constructor (nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    }
}

//console.log(Pessoa.idade);

const square = {
    height: 10,
    width: 20,
    calc: function() {return this.height * this.width},
}

//console.log(square.calc());

const Worker1 = new Person ("Luiz","Pereira", 26);
console.log(Worker1);
console.log(Worker1.idade);
console.log(Worker1.sobrenome);


