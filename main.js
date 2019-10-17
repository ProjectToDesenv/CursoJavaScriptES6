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

/*const arr = [1,2,3,4,5,8,9,15,11,21]

const newArr = arr.map(function(item, index){

    return item * index
})

console.log(newArr);


const sum = arr.reduce(function(total,next){
return total + next;
})

console.log(sum);

const filter = arr.filter(function(item){
return item % 2 ===0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 2;

});

console.log(find);



const arr2 = [1,3,4,5,6];

const newArr2 = arr2.map(item => item * 2);

console.log(newArr2);

const test = () => ({nome: 'Marcelo Matos dos Santos', idade: 32, nacionalidade : 'BR'});
console.log(test());




/* Aula 07/10/2019*/
/*const soma = (a = 3, b = 6) => a + b;
console.log(soma(1));
console.log(soma());

const usuario ={
nome:'Marcelo',
idade: 32,
endereco:{
    rua: 'Jandaia do Sul',
    numero: 263,
    bairro: 'São Conrado'
}
};

/* Desestruturação*/

/*const {nome,idade}= usuario;

console.log(nome);
console.log(idade);

/* Rest /Spread */


   //function soma3(a,b,...params){
        //return params.reduce((total,next) => total + next);        
     //   return params;
    //};




    /*console.log(soma3(1,3,4,5,6,7));


    //SPREAD
    const arr5 = [1,2,3];
    const arr6 = [4,5,6];

    const arr7 = [...arr5,arr6];
    console.log(arr7);


    const nome2 = 'Marcelo Matos dos Santos';
    const idade2 = 32;

    // Template Literals
  //  console.log(`Meu Nome é ${nome2} e tenho ${idade2} anos.`)


    //Object Short Syntax

    /*const usuario2 = {
        nome2,
        idade2
    };
    console.log(usuario2);

    

import {soma_WebPack} from './funcoes';
import { rejects } from 'assert';

console.log(soma_WebPack(1,9));





const minhaPromisse = () => new Promise((resolve,reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

minhaPromisse().then(response => {
    console.log(response);
});


async function executaPromise(){
    const response = await minhaPromisse();

    console.log(response);
}

executaPromise();*/

import axios from 'axios';

class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);

        }catch(err){
            console.warn('Erro na API');
        }
       
    }
}

Api.getUserInfo('diego3g');


class App{
    constructor(){
        this.respositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        console.log(this.formEl);
        this.registerHandlers();
    }

    registerHandlers(){
    this.formEl.onsubmit = event => this.addRepository(event);

    
    }

    addRepository(event){

        event.preventDefault();

        this.respositories.push({
            name: 'Marcelo Matos dos Santos',
            description :'Tire sua ideia do papel e dê vida a sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat/rocketseat.com.br'
        });

        console.log(this.respositories);

        this.render();
    }

    render(){       
        this.listEl.innerHTML = '';
        this.respositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src',repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);   
            
            this.listEl.appendChild(listItemEl);

         

        });
    }

}

new App();

