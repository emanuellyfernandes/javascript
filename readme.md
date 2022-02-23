
<br>
<h1 align="center">
<img src="./.github/js.png">
</h1>
<h1 align="center">Java Script</h1>

É uma linguagem de programação de alto nível (que se aproxima da linguagem humano - inglês). E considerada uma linguagem interprestada / funcional.

JavaScript permite inserir dinâmica ou interações em elementos HTML e controlar customizações CSS, de forma programática em páginas de internet, sistemas ou app.

# Operadores
| Operador Aritmético |  Descrição  |
| ----------- | ----------- |
| + | Adição |
| - | Subtração |
| * | Multiplicação |
| / | Divisão |
| % | Módulo - Resto de uma operação de divisão |
| ++ | Incremento ex: x=x+1
| -- | Decremento ex: x=x-1

 Operador Atribuição |  Descrição  |
| ----------- | ----------- |
| = | Atribuição |
| += | Atribuição de soma (x += y) == (x = x + y) |

 Operador Lógico |  Descrição  |
| == | Igualdade |
| != | Diferente |
| && | e |
| || | ou |
| !(idade > 50) | NÃO idade maior que 50 |

<details>
<summary><strong>Meus exemplos</strong></summary>

Para fazer declarações: console.log("")

#

Para grupo de funções:
function minhafuncao(){} 

#

para declarar variáveis: var, let, const

#

para imprimir na tela:
document.getElementById("texto").innerHTML = "o texto que vc quer";

#

operador condicional ternário:
var idade, eleitor;

idade = 25;
eleitor = (idade < 18) ? "Não é eleitor" : "Sim, é eleitor";

alert ('A resposta é: ' + eleitor + ' a idade dele é: ' + idade);

#
 







</details>

append -> adicionar 
campo de texto -> value

<br>

<h3>Função</h3>

<br>

* Função Soma 

          function soma (valor1,valor2){
              return valor1 + valor2;
          }

          document.getElementById("texto").innerHTML = soma(10,10);


  <br>

* Função Cotação Dolar

            function realParaDolar(real,cotacaoDolar){
                 return real * cotacaoDolar;
            }

            var total = realParaDolar(10,5.08);

            document.getElementById("texto2").innerHTML = total;


ou


             function realParaDolar(real,cotacaoDolar){
                 return real * cotacaoDolar;
            }

            var real = 5;
            var cotacaoDolar = 5.5;

            var total = realParaDolar(real,cotacaoDolar);

<br>

* Função Fahrenheit para Celsius


            function paraCelsius(valorFh){
                return(5/9) * (valorFh - 32)
            }

            var x = paraCelsius(77);

            document.getElementById("texto2").innerHTML = ("A temperatura é de: " + x + " grau celsius");



<h3>Objetos</h3>

São basicamente variáveis com muitos valores.

Os valores dentro de um objeto são chamados de propiedades

Objetos também podem ter métodos. Um método é uma função colocadas dentro de uma propiedade.

para declarar os objetos é melhor usar (((const)))

<br>

            const carro = {
                marca:"ford", 
                modelo:"ka",
                ano:2020, 
                placa:"QADFGTF",
                buzina: function() 
                   {alert("biii")}
            };

            console.log(carro.ano);
            
         // vai retornar o ano do carro
<br>

            const carro = {
                marca:"ford", 
                modelo:"ka",
                ano:2020, 
                placa:"QADFGTF",
                    

                completo:function(){
                  return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
                    }
                };

                console.log(carro.completo());

            // vai retornar A marca é ford e o modelo é: ka


<h3>Eventos</h3>

<br>

São ações disparadas pela interação dos usuários na página.

É esses eventos que tornam as páginas interativas e dinâmicas.

Os eventos mais utilizados:

* onclick -> Disparado quando recebe um click.

* ondblclick -> Disparado quando clique duplo.

* onmouseover -> Disparado quando o mouse está sobre.

* onmouseout -> Disparado quando o mouse é movido para fora do elemento.

* onmousemove -> Disparado quando o mouse é movido no elemento.

* onmousedown -> Disparado quando o clique do botão foi pressionado.

* onmouseup -> Disparado quando o clique do botão é liberado.

* onfocus -> Disparado quando o elemtno recebe o foco. Válido para input..

* onchange -> Disparado quando existe uma mudança no conteúdo.

* onblur -> Disparado quando o elemento perde o foco.

* onkeydown -> Disparado quando uma tecla é pressionada.

* onkeypress -> Disparado quando uma tecla é pressionada e solta.

* onkeyup -> Disparado quando uma tecla é solta sobre um elemento.

* onload -> Disparado quando a página terminou de ser carregada.

* onresize -> Disparado quando há um redimencionamento da janela.


<summary>

Meus exemplos 

            function viraVermelho(){
                let div = document.getElementById("teste");
                div.style.backgroundColor = "red";
            }




<h3>Arrays</h3>

Os arrays em JS são usados para armazenar vários valores em uma única variável. O item é encontrado pela posição.

ex: const lista = ["arroz","feijão","macarrão","leite"];

A lista [0] (lista na posição 0) vai conter o valor "arroz".