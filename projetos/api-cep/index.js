let escreverCep = document.querySelector(".escrever-cep");
let pesquisar = document.querySelector(".pesquisar-cep");




function adicionarEndereço(){
  
    //pegar o valor digitado no input
    let valorInput = escreverCep.value;        

       const ajax = new XMLHttpRequest();
       ajax.open('GET', 'https://viacep.com.br/ws/' + valorInput + '/json/');
       ajax.send();
       
       ajax.onload = function(){
          

           //transformando o texto em objeto
           let obj = JSON.parse(this.responseText);

           //valores que preciso 
           let rua = obj.logradouro;
           let bairro = obj.bairro;
           let cidade = obj.localidade;
           let estado = obj.uf;
           let cep = obj.cep;

           document.getElementById('rua').innerHTML = rua;
           document.getElementById('bairro').innerHTML = bairro;
           document.getElementById('cidade').innerHTML = cidade;
           document.getElementById('estado').innerHTML = estado;
           document.getElementById('cep').innerHTML = cep;

       
        }


       
       
        //zerar o ncampo de adicionar tarefa
        escreverCep.value = "";
        escreverCep.focus();

    }


escreverCep.addEventListener("keyup", function(event){
    //se apertar enter
    if(event.keyCode ===13) {
        event.preventDefault();
        pesquisar.click();
    }
});