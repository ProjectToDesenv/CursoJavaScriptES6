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

const arr = [1,2,3,4,5,8,9,15,11,21]

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

