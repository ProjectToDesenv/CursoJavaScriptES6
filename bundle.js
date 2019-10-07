"use strict";

/*class TodoListNovo {
    constructor(){
        this.todos = [];
    }

    static addTodo(){
        this.todos.push('novo todo');
        console.log(this.todos);

    }
}
TodoListNovo.addTodo();
TodoListNovo.addTodo();
TodoListNovo.addTodo();
TodoListNovo.addTodo();

*/

/*const usuario = {nome : 'Marcelo Matos dos Santos', idade: 32};

console.log(usuario);

class Matematica {
    static soma(a,b){
        return a + b;
    }
}


const valor = Matematica.soma(1,2);

console.log(valor);



class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class Teste {
    metodo(){}
}

class TodoList extends List{
    constructor(){
        super();
        this.usuario = 'Marcelo Matos dos Santos';

        //this.todos = [];
    }

    //addTodo(){
    //this.todos.push('novo todo');
    //console.log(this.todos);
    mostraUsuario(){
        console.log(this.usuario);
    }
    

}


const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
   // MinhaLista.addTodo();
}

MinhaLista.mostraUsuario();*/

/*Aula 04/10/2019*/
var arr = [1, 2, 3, 4, 5, 8, 9, 15, 11, 21];
var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 2;
});
console.log(find);
var arr2 = [1, 3, 4, 5, 6];
var newArr2 = arr2.map(function (item) {
  return item * 2;
});
console.log(newArr2);

var test = function test() {
  return {
    nome: 'Marcelo Matos dos Santos',
    idade: 32,
    nacionalidade: 'BR'
  };
};

console.log(test());
/* Aula 07/10/2019*/

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(1));
console.log(soma());
var usuario = {
  nome: 'Marcelo',
  idade: 32,
  endereco: {
    rua: 'Jandaia do Sul',
    numero: 263,
    bairro: 'São Conrado'
  }
};
/* Desestruturação*/

var nome = usuario.nome,
    idade = usuario.idade;
console.log(nome);
console.log(idade);
/* Rest /Spread */

function soma3(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  //return params.reduce((total,next) => total + next);        
  return params;
}

;
console.log(soma3(1, 3, 4, 5, 6, 7)); //SPREAD

var arr5 = [1, 2, 3];
var arr6 = [4, 5, 6];
var arr7 = [].concat(arr5, [arr6]);
console.log(arr7);
var nome2 = 'Marcelo Matos dos Santos';
var idade2 = 32; // Template Literals

console.log("Meu Nome \xE9 ".concat(nome2, " e tenho ").concat(idade2, " anos.")); //Object Short Syntax

var usuario2 = {
  nome2: nome2,
  idade2: idade2
};
console.log(usuario2);
