window.addEventListener('load', () => {

    console.log('Teste: ' + location.href);

    //location.href = "http://www.google.com"

    //location.reload();
    
    //--------------------------------------------------

    //CAPTURA DE ELEMENTOS
    
    //botao salvar
    const btnToSalve = document.getElementById('btn');

    //Input type Text
    const inputText = document.getElementById("text");

    //Lista de Tarefas UL
    const list = document.getElementById('task-list');
    let arrayTarefas = [];
    //--------------------------------------------------

    //DEFINICAO DAS FUNCOES QUE SERAO EXECUTADAS ( EVENT HANDLERS)

    //botao salvar
    btnToSalve.addEventListener('click', (event) => {
        
        event.preventDefault();
        
        //1.Capturar o texto digitado no campo
        let tarefa = inputText.value.toUpperCase();

        //1.0 Array de Erros
        let errors = [];

        

        //1.1 Verifica se o texto capturado possui algum valor
        if(!tarefa){
            
            inputText.style.border = "#3e6e6c dotted 2px";
            errors.push('Preencha o campo');
            
        }

        //1.2 Captura o elemento ul onde exibira os erros
        let ulErrors = document.querySelector('.errors ul');

        //1.3 Cria um laço for para exibir os erros encontrado na array
        for(let i = 0; i < errors.length; i++){

            ulErrors.innerHTML += `<li> ${errors[i]} </li>`;
        }
        
        //1.4 Verifica se existe algum erro, se sim inibi o envio do formulário ao clicar no botao salvar
        if( errors.length > 0){

            event.preventDefault();

        }else {

            // Limpa as mensagens de erros
            ulErrors.innerHTML = ` `;
            
            //Formata a borda do formulario tarefa
            inputText.style.border = "white solid 2px";

            //--------------------------------------------------

            //2.Criar um objeto tarefa: [ {"id": 1, "texto": "Texto digitado", "feito": false} ]

            //3.Adicionar esse objeto no array de tarefas;

            

            let objetoTarefa = 
                
            {
                "id": 1,
                "texto": tarefa,
                "feito": false
            }

            arrayTarefas.push(objetoTarefa);

            localStorage.setItem('boxTarefas', JSON.stringify(arrayTarefas));

            let onWindowLoad = (event) => {

                //Carregar Item do local storage

                arrayTarefas = JSON.parse(localStorage.getItem('boxTarefas'));

                if(arrayTarefas === null){
                    arrayTarefas = [];
                    localStorage.setItem('boxTarefas', '[]');
                }

                // mostrar as tarefas carregadas...

                for (const t of arrayTarefas) {
                    
                }
            }

            window.addEventListener('load', onWindowLoad);

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
        }

        
    });
    
    //Input Text
    inputText.addEventListener('keyup', (event) => {

        // event.preventDefault();
        
        // let id = event.target.id;
        
        // inputText.value = inputText.value.toUpperCase();

        // console.log(inputText.value);

    });

    //--------------------------------------------------

});


    /**
 * Questões de Usabilidade:
 * 1 - O campo já deve iniciar com foco
 * 2 - Limpar o campo sempre que uma tarefa nova seja adicionada
 * 
 * Questões de funcionalidade
 * 
 * 1 - Marcar tarefa como feita
 * 2 - Remover uma tarefa
 * 
 * Cada tarefa deve ter um id (identificador único para a tarefa)
 * 
 *  */
