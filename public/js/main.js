window.onload = () =>{
    
    //--------------------------------------------------

    //CAPTURA DE ELEMENTOS
    
    //botao salvar
    const btnToSalve = document.getElementById('btn');

    //Input type Text
    const inputText = document.getElementById("text");

    //
    const list = document.getElementById('task-list');

    //--------------------------------------------------

    //DEFINICAO DAS FUNCOES QUE SERAO EXECUTADAS ( EVENT HANDLERS)

    //botao salvar
    btnToSalve.addEventListener('click', (event) => {

        event.preventDefault();
        
        //1.Capturar o texto digitado no campo
        let tarefa = inputText.value.toUpperCase();;
        
        //--------------------------------------------------

        //2.Criar um objeto tarefa: {texto: "Texto digitado", feito: false}
        let objetoTarefa = [
            
            {
                "texto": tarefa,
                "feito": false,
            }
        ]

        //--------------------------------------------------

        //3.Adicionar esse objeto no array de tarefas;


        //--------------------------------------------------
        //4.Adicionar a tarefa na DOM

        //4.1 Criar o novo li
        let li = document.createElement('li');

        //4.2 Adicionar o conteudo do li
        li.innerHTML = 
            `<input type="checkbox" id="check_1">
            <label for="check_1"> ${tarefa} </label>
            <i class="material-icons">delete</i>`

        //4.3 Adicionar esse novo li na lista
        list.appendChild(li);
        
        //4.4 Limpa o formulario com texto digitado
        inputText.value = null;
        //--------------------------------------------------
     
    });
    
    //Input Text
    inputText.addEventListener('keyup', (event) => {

        // event.preventDefault();

        // let id = event.target.id;
        
        // inputText.value = inputText.value.toUpperCase();

        // console.log(inputText.value);

    });

    //--------------------------------------------------
}