
let inputNome = document.getElementById('name');
let inputData = document.getElementById('birth-date');
let contador = 0;

function cliqueBotao(){

    
    let valorNome = inputNome.value;
    let valorData = inputData.value;

    if((valorNome!=="" ) && (valorNome!== null) && (valorNome!== undefined)){

        ++contador;

     let novoCadastro = 
     `
     <br>
        <div id = "{$contador}" class="dados">
             <h3 class="nomee">Nome:</h3>
             <p id="nomee" class="nomes"> ${valorNome}</p>
    
            <h3 class="data">Data de Nascimento:</h3>
            <p id="data"> ${valorData}</p>
        </div><br>
 
    ` ;

    document.querySelector(".cadastro").innerHTML += novoCadastro;
    


     //zerar o ncampo de adicionar tarefa
     inputNome.value = "";
     inputNome.focus();

     inputData.value = "";
     inputData.focus();

    }

}
