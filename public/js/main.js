//CAPTURA DE ELEMENTOS HTML
const btnSalvar = document.getElementById('btn');
const formTexto = document.getElementById('text');
const listaUl = document.getElementById('task-list');

//DEFINICOES INICIAIS
let arrayTarefas = [];
let chaveLocal = "boxTarefas";

//FUNCOES DE EXECUCAO
const loadTarefas = () => {

    arrayTarefas = JSON.parse(localStorage.getItem(chaveLocal));

    if(arrayTarefas === null) {

        arrayTarefas = [];
        localStorage.setItem(chaveLocal, '[]');

    }else {

        for (const tarefa of arrayTarefas) {

            exibirTarefa(tarefa);
        };
    }
}

const clickSalvar = (event) => {

    event.preventDefault();

    let textoTarefa = formTexto.value;

    let tarefa = addTarefasArray(textoTarefa);

    exibirTarefa(tarefa);

    formTexto.value = null;
}

const addTarefasArray = (textoTarefa) => {

    let tarefa = {

        id: 0,
        texto: textoTarefa,
        feito: false
    }

    arrayTarefas.push(tarefa);

    localStorage.setItem(chaveLocal, JSON.stringify(arrayTarefas));

    return tarefa;
}

const exibirTarefa = (tarefa) => {

    let novoLi = document.createElement('li');

    novoLi.innerHTML = `
    <input type="checkbox" id="check_1">
    <label for="check_1">${tarefa.texto.toUpperCase()}</label>
    <i class="material-icons">delete</i>
    `
    listaUl.appendChild(novoLi);    

}

// EVENT HANDLER - MANIPULADOR DE EVENTO
 window.addEventListener('load', loadTarefas);
 btnSalvar.addEventListener('click', clickSalvar);



