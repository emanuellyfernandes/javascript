let tarefas=[];
window.onload

let escreverTarefa = document.querySelector(".escrever-tarefas");
let adicionarTarefa = document.querySelector(".adicionar-tarefas");
let main = document.querySelector(".bloco-tarefas");
let contador = 0;


function addTarefa(){
    //pegar o valor digitado no input
    let valorInput = escreverTarefa.value;

    if((valorInput !=="" ) && ( valorInput !== null) && (valorInput !== undefined)){
        
        ++contador;

        let novaTarefa =
        `<div id="${contador}" class="tarefas">
        <label>
        <p onclick="marcarTarefa(${contador})" class="tarefa" id="tarefa"> ${valorInput} </p>
        <img onclick="marcarTarefa(${contador})" src="check.png" style="width:30px">
        </label>
        <button onclick="deletar(${contador})" class="tarefas-excluir"><img src="excluir.png" style="width:13px"></button>
        </div>`;
    
        main.innerHTML += novaTarefa;

        if(localStorage.getItem("tarefa") == null){
            localStorage.setItem("tarefa", JSON.stringify(tarefas));
        }
        else{

            localStorage.setItem("tarefa", JSON.stringify(tarefas));

        }

        console.log(localStorage.getItem(valorInput));

        //zerar o ncampo de adicionar tarefa
        escreverTarefa.value = "";
        escreverTarefa.focus();
       
        

    }

}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
    salvarLocalStorage();
}


function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe=="tarefas"){
    item.classList.remove('tarefa');
    item.classList.add('tarefa-check');  

    }else{
        item.classList.remove('tarefa-check');

    }

    salvarLocalStorage();

}



escreverTarefa.addEventListener("keyup", function(event){
    //se apertar enter
    if(event.keyCode ===13) {
        event.preventDefault();
        adicionarTarefa.click();
    }
});

