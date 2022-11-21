/**
 * Questões de Usabilidade:
  
 * OK 1 - O campo já deve iniciar com foco
 * OK 2 - Limpar o campo sempre que uma tarefa nova seja adicionada
 
 * Questões de funcionalidade
 * 
 * 1 - Marcar tarefa como feita
 * 2 - Remover uma tarefa
 * 3 - Cada tarefa deve ter um id (identificador único para a tarefa)
 
 **/


//CAPTURA DE ELEMENTOS HTML
const btnSalvar = document.getElementById('btn');
const formTexto = document.getElementById('text');
const listaUl = document.getElementById('task-list');
const ulErrors = document.querySelector('.errors ul');

//DEFINICOES INICIAIS
let arrayTarefas = [];
let chaveLocal = "boxTarefas";


//FUNCOES DE EXECUCAO
const loadTarefas = () => {

    arrayTarefas = JSON.parse(localStorage.getItem(chaveLocal));

    if(arrayTarefas === null) {

        arrayTarefas = [];
        localStorage.setItem(chaveLocal, '[]');

    } else {

        for (const tarefa of arrayTarefas) {

            exibirTarefa(tarefa);
        };
    }

    formTexto.focus();
}

const clickSalvar = (event) => {

    event.preventDefault();

    let textoTarefa = formTexto.value;

    if(textoTarefa.length === 0){

        formTexto.style.border = "#3e6e6c dotted 2px";

        let errors = "CAMPO VAZIO!";

        const ulErrors = document.querySelector('.errors ul');

        ulErrors.innerHTML = `<li> ${errors} </li>`;

        //event.preventDefault();

    } else {

        ulErrors.innerHTML = " ";

        formTexto.style.border = "white solid 2px";

        let tarefa = addTarefasArray(textoTarefa);

        exibirTarefa(tarefa);

        formTexto.value = null;
    }
    
}

const geradorId = () => {

    let novoId;

    if( arrayTarefas.length == 0){

        novoId = 1;

    } else {

        novoId = arrayTarefas[arrayTarefas.length -1 ].id + 1;
    }
    
    return novoId;
}

const addTarefasArray = (textoTarefa) => {

    let tarefa = {

        id: geradorId() ,
        texto: textoTarefa,
        feito: false
    }

    arrayTarefas.push(tarefa);

    localStorage.setItem(chaveLocal, JSON.stringify(arrayTarefas));

    return tarefa;
}

const removerTarefa = (id) => {

    let posicao = arrayTarefas.findIndex( arrayTarefas => arrayTarefas.id = id);
    arrayTarefas.splice(posicao, 1);

    localStorage.setItem(chaveLocal, JSON.stringify(arrayTarefas));

    let liTarefa = document.getElementById(`li_${id}`);
    liTarefa.remove();

}

const tarefaAlterada = (id) => {

    let tarefa = arrayTarefas.find( arrayTarefas => arrayTarefas.id == id)

    tarefa.feito = !tarefa.feito;

    localStorage.setItem(chaveLocal, JSON.stringify(arrayTarefas));

}

const exibirTarefa = (tarefa) => {

    let novoLi = document.createElement('li');

    novoLi.setAttribute('id', `li_${tarefa.id}`);

    let checked = tarefa.feito ? 'checked' : '';

    novoLi.innerHTML = `
    <input type="checkbox" ${checked} id="check_${tarefa.id} "onclick = "tarefaAlterada(${tarefa.id})"  >
    <label for="check_${tarefa.id}"> ${tarefa.texto.toUpperCase()} </label>
    <i class="material-icons" onclick ="removerTarefa(${tarefa.id})">delete</i>
    `
    listaUl.appendChild(novoLi);    

}

// EVENT HANDLER - MANIPULADOR DE EVENTO
 window.addEventListener('load', loadTarefas);
 btnSalvar.addEventListener('click', clickSalvar);



