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

const usuario = {nome : 'Marcelo Matos dos Santos', idade: 32};

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

MinhaLista.mostraUsuario();

