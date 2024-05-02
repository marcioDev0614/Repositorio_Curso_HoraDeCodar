// // //const { forEach } = require("lodash")

// // const { slice, split, truncate } = require("lodash")

// // //  ********** FUNDAMENTOS DE JAVASCRIPT

// // console.log("Teste4")
// // let meuObjeto = {}
// // let meuArray = []
// // let meuNull = null
// // let meuUnderfined = undefined

// // console.log(typeof meuObjeto)
// // console.log(typeof meuArray)
// // console.log(typeof meuNull)
// // console.log(typeof meuUnderfined)

// // let x = 10
// // const y = 5

// // console.log(typeof x)

// // console.log(x, y)

// // //  *******    Operadores ariméticos

// // console.log(x + y)
// // console.log(x - y)
// // console.log(x * y)
// // console.log(x / y)
// // // *********** Operadores de comparação

// // console.log(x == y)
// // console.log(x != y)
// // console.log(x === y)
// // console.log()
// // // Operadores lógicos
// // // AND &&
// // // OR ||
// // console.log(10 > 5 && 20 > 5)
// // console.log(10 > 5 && 20 < 5 )
// // console.log(10 < 5 && 20 < 5 )

// // console.log(10 < 5 || 20 > 5 )
// // console.log(10 > 5 || 20 < 5 )
// // console.log(10 < 5 || 20 < 5 )
// // console.log()
// // // Conversão de tipos
// // const meuNumeroString = "123"
// // const meuNumeroNumber = Number(meuNumeroString)

// // console.log(`Tipo: ${meuNumeroString} ${typeof meuNumeroString}`)
// // console.log(`Tipo convertido: ${meuNumeroNumber} ${typeof meuNumeroNumber}`)

// // // **** Estruturas de condição - if, else, else if.

// // const idade = 21

// // if(idade < 13){
// //     console.log(`${idade}, você é uma criança.`)
// // }
// // else if(idade < 20){
// //     console.log(`${idade}, você é um adolescente.`)
// // }
// // else{
// //     console.log(`${idade}, você é um adulto.`)
// // }

// // if(true){
// //     console.log('true')
// // }
// // else{
// //     console.log('false')
// // }

// // // ******* Switch

// // const fruta = 'tomate'

// // switch(fruta){
// //     case 'Banana':
// //         console.log("Fruta Banana")
// //         break
// //         case 'Maça':
// //         console.log("Fruta Maça")
// //         break
// //         default:
// //         console.log("Não é fruta")

// // }

// // // ***** Estrutura de repetição

// // const n = 10

// // for(let i = 1; i <= n; i++){
// //     console.log(i)
// // }

// // const numeros = [10, 8, 7, 7]

// // numeros.forEach(function(nome, indice){
// //     console.log(`${indice + 1} ${nome}`)
// // })

// // numeros.forEach(n => console.log(n))

// // const exibirNumeros = numeros => console.log(numeros)
// // numeros.forEach(exibirNumeros)

// // //***  */ For

// for(let i = 0; i <= 5; i++){
//     console.log('O valor de i é ' + i)
// }

// // // **** while

// // let b = 0;

// // *** while(b <= 5){
// //     console.log('O valor de b é ' + b)
// //     b++
// // }

// // // *** do while

// // let k = 0

// // do{
// //     console.log('o Valor de k é ' + k)
// //     k++
// // }while(k <= 5)

// // // Funções
// // // Sintaxe de uma função
// // // function funcaoComArgumento(arg1, arg2){ corpo da funcao}
// // // function funcaoSemArgumento(){ corpo da funcao}
// // // Ex:

// function mediaAluno(nota1, nota2){
//     return (nota1 + nota2) / 2
// }

// console.log(`Média final do aluno: ${mediaAluno(7, 8)}`)

// // function funcaoNormal(){
// //     console.log('Olá')
// // }
// // funcaoNormal()
// // const funcaoArrow = () => 'Olá'

// // console.log(funcaoArrow())

// // const multiplicar = a => a * 10
// // console.log(multiplicar(2))

// // const mediaArrow = (n1, n2) => console.log((n1 + n2) / 2)
// // mediaArrow(8, 9)

// // // **** Escopo de variaveis

// // let cor  = 'Azul'

// // function imprimirCor(){
// //     let cor = 'Verde'
// //     console.log(cor)
// // }

// // console.log(cor) // Variével de escopo global
// // imprimirCor() // Variável de espoco de função

// // // ***** Conceito de hoisting - Içamento
// // // Quer dizer que você pode invocar a função antes da sua implementação
// // // Ex:

// // testeHoisting() // Invocando a função antes

// // function testeHoisting(){
// //     console.log('Deu certo')
// // }

// // // ***** Arrow function

// // const testeArrow = () => console.log("Isso é uma arrow funcion")
// // testeArrow()

// // // ****** Valores que retornam true or false

// // const minhaVariavel1 = ''
// // const minhaVariela2 = 'teste'

// // if(minhaVariavel1){
// //     console.log('É versadeiro')
// // }
// // else{
// //     console.log('É falso')
// // }

// // if(minhaVariela2){
// //     console.log('É verdadeiro')
// // }
// // else{
// //     console.log('É falso')
// // }


// // // **** Arrais i listas

// // const numeros3 = [1, 2, 3, 4, 5 ]
// // console.log(numeros3)

// // console.log(numeros3[0]) // Acessando a primeira posição
// // console.log(numeros3[3])

// // numeros3.pop() // Remove o ultimo elemento de um array
// // console.log(numeros3)

// // // ***** Strings

// // const minhaVariavel = 'Olá, Mundo.'
// // const minhaVariaNova = minhaVariavel + 'Como você está'
// // const meuNome = 'Márcio'

// // console.log(minhaVariavel)
// // console.log(minhaVariaNova)

// // // **** Interpolação

// // const minhaStringNova = `${meuNome} ${minhaVariavel}`
// // console.log(minhaStringNova)

// // console.log(minhaStringNova.length)
// // console.log(meuNome[0])

// // // ***** Data e hora

// // const agora = Date()
// // console.log(agora)

// // // **** Math

// // console.log(Math.PI.toFixed(2))
// // console.log(Math.round(3.7)) // Arredonda pra cima o valor
// // console.log(Math.sqrt(16)) // Raiz quadrada
// // console.log(Math.pow(2, 3)) // 2 elevado a 3


// // // **** Exercicios de fundamentos

// // // Crie um script que imprimia "Olá, Mundo!"

// // const print = () => console.log("Olá, Mundo!")
// // print()

// // // Dado o valor de uma string, converta-o para um tipo número

// // const variavelString = "1234"
// // const variavelNumero = Number(variavelString)
// // console.log(`Variável convertida: ${typeof variavelNumero}`)

// // // Daod uma string "JavaScript é incrivel", descreva quando caracteres tem e quantas palavras.

// // const valorString = "JavaScript é incrivel"
// // console.log(`Quantidade de caraceres: ${valorString.length}`)

// // const palavras = valorString.split(' ')
// // console.log(`Quantidade de palavras: ${palavras.length}`)

// // // Crie um array com cinco nomes. Use o loop for para imprimi-los

// // const nomes = ['Matheus', 'Julia', 'Jouze', 'Chiquinha', 'Márcio']
// // for(let i in nomes){
// //     console.log(`${i} : ${nomes[i]}`)
// // }
// // for(let i = 1; i < nomes.length; i++){
// //     console.log(nomes[i])
// // }


// // // AVANÇANDO EM JAVASCRIPT

// // // Manipulação de arrays

// // const frutas = ['Maça', 'Laranja']
// // frutas.unshift('Banana') // Adiciona um novo elemento na 1ª posição
// // console.log(frutas)

// // frutas.shift() // Contrário do unshift
// // console.log(frutas)

// // // map, filter, reduce utilizando via arrow

// // const numerosPares = [1,2,3,4,5,6]

// // const resultNumeros = numerosPares.find((x) => x % 2 === 0)
// // console.log(`1º elemento divisivel por 2 é: ${resultNumeros}`)

// // const numerosDivisiveis = numerosPares.filter((x) => x % 2 === 0)
// // console.log(`Lista de elementos divisiveis por 2 são: ${numerosDivisiveis}`)

// // // Manipulação de strings

// // const frase = 'Olá, Mundo! '
// // const fraseSemEspaco = frase.trim().split(' ')
// // console.log(frase)
// // console.log(fraseSemEspaco)

// // const fraseComeca = 'JavaScript é incrivé!'
// // // Verifica se a palavra começa com o texto informado como parametro
// // console.log(fraseComeca.startsWith('Java')) // Retorna true or false
// // // endsWith no final
// // console.log(fraseComeca.endsWith('Java'))//  Retorna true or false

// // // Excessões e tratamentos de erros

// // const idade2 = 15

// // // Obs: esse erro só é rederizado via browser.
// // // if(idade < 18){
// // //     throw new Error("Você deve ter pelo menos 18 anos!")
// // // }

// // try {
// //     const idade2 = 20
// //     if(idade2 < 18){
// //         throw new Error("Você deve ter pelo menos 18 anos!")
// //     }
// // } catch(erro){
// //     console.log(erro.message)
// // }

// // console.log("Continuando o programa...")

// // // Callback => funcao que executa em outra função

// // function cumprimentar(nome, callback){
// //     console.log('Olá, ' + nome)
// //     callback();
// // }

// // function mostrarSaudacao(){
// //     console.log('Como você está')
// // }

// // cumprimentar('Mathues', mostrarSaudacao)

// // // settimeout => depois de um tempo executa algo.

// // function mostrarMensagem(){
// //     console.log('Essa mensagem será exibida após 3 seg.')
// // }

// // //setTimeout(mostrarMensagem, 3000) // Executa 1 vez de pois de 3 segun
// // //setInterval(mostrarMensagem, 4000) // Fica executando em 4 e 4 segundos

// // // Promises

// // const promessa = new Promise((resolve, reject) => {
// //     const condicao = false
// //     if(condicao){
// //         resolve('A condição é verdadeira')
// //     }
// //     else{
// //         reject('A confição é falsa')
// //     }
// // });

// // // Invocando a promisse

// // promessa.then((mensagem) => {
// //     console.log(mensagem)
// // }).catch((erro) => {
// //     console.log(erro)
// // })

// // // Bibliotecas feitas que são "promise based"

// // const promise1 = Promise.resolve(3)
// // const promise2 = new Promise((resolve, reject) => {
// //     setTimeout(resolve, 2500, "Testando...");
// // })


// // Promise.all([promise1, promise2]).then((valores) => {
// //     console.log(valores)
// // })

// // Async Await
// // Muito utilizado em requisição há servidores.

// // async function obterValor(){
    
// //     const promessa = new Promise((resolve, reject) => {
// //         setTimeout(() => resolve('Valor obtido'), 2000)
// //     });

// //     const valor = await promessa

// //     console.log(valor)
// // }

// // obterValor()

// // async function obterValorComErro(){
// //     try {
// //         const promessa = new Promise((resolve, reject) => {
// //             setTimeout(() => resolve('Valor com erro'), 2000)
// //         });
    
// //         const valor = await promessa
    
// //         console.log(valor)
        
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }

// // obterValorComErro()


// // JSON (JavaScript Object Notation)

// // {nome: "Teste"} => {"nome": "Teste"}
// // Padroniza a comunicação
// // front-end e back-end em uma linguagem só
// // ex:

// // // Instanciando um objeto
// // const object = {nome: "João", idade: 30}

// // // convertendo em string Json
// // const jsonString = JSON.stringify(object)

// // console.log(typeof jsonString)
// // console.log(jsonString)

// // // Criando um JSON
// // const json = '{"nome": "João", "Idade": 30}'

// // // Convertendo para Objeto
// // const object2 = JSON.parse(json)
// // console.log(`${object2.nome}: ${object.idade}`)
// // console.log(object2)

// // Exercicio de Manipulação de Array

// /* 
// Crie uma lista de compras que é inicialmente vazia.
// adicione 5 itens a lista usando o push()
// Agora, remova o primeiro item da lista usando o shoft()
// Por fim, imprimi a lista.
// */

// const lista = []
// lista.push('Arroz', 'Feijão', 'Carne', 'Ovos', 'Farinha')
// lista.shift()
// console.log(lista)


// // Exercicio de Manipulação de Array - find()

// /* 
// Você tem um array de números: [3, 7, 14, 21, 29, 36]
// use a função find() para encontrar o primeiro número que é divisivel por 7
// e maior que 10
// */

// const numerosArray = [3, 7, 14, 21, 29, 36]
// const resultArray = numerosArray.find((x) => x % 7 === 0 && x > 10)
// console.log(resultArray)

// // Exercicio de Manipulação de Array - filter()

// /* 
// Você tem um array de números: [3, 10, 15, 20, 25, 30, 40]
// use a função filter() para encontrar um novo array que contenha apenas os
// que sçao maiores que 20
// */

// const numeros = [3, 10, 15, 20, 25, 30, 35, 40]
// const resultFilter = numeros.filter((x) => x > 20)
// console.log(resultFilter)

// // Exercicio de Manipulação de String - split(), trim()

// /* 
// Dada a string: "Bom dia, mundo!"
// Remova os espações em branco do inicio e no final da string
// em seguida, divida a string em palavras
// */

// const frase = ' Bom dia, mundo '
// const resultFrase = frase.trim().split(' ')
// console.log(resultFrase)


/* Exercicio de Manipulação de String  - startsWith() e endsWith()
Dado a string: "O rato roeu a roupa do rei de Roma"

*/
 
// const frase = "O rato roeu a roupa do rei de Roma"
// const isComeca =  frase.startsWith('O')
// console.log(isComeca)
// const IsTermina = frase.endsWith('Roma')
// console.log(IsTermina)

// DOM - DOCUMENT OBJECT MODEL

// const elemento1 = document.getElementById('meuId')
// console.log(elemento1)

// const elemento2 = document.querySelector('.classeDosFilhos')
// console.log(elemento2)

// const elemento3 = document.querySelector('#meuFormulario')
// console.log(elemento3)

// // Manipular conteúdo de texto

// const elemento4 = document.querySelector('#meuId')
// console.log(elemento4.textContent)

// console.log(elemento4.textContent)
// const elemento5 = document.querySelector('#botaoCriar')
// console.log(elemento5)
// elemento5.textContent = 'Criar elemento'

// setTimeout(() =>{
//     elemento5.textContent = 'Criar elemento'
// }, 3000)

// setTimeout(() =>{
//     elemento4.textContent = 'Olá, Márcio.'
// }, 5000)


// // Trabalhando com atributos

// const link = document.querySelector("a")
// link.setAttribute('href', 'http://horadecodar.com.br/cursos') // Alterando o link do href
// console.log(link.getAttribute('href')) // Obtem o link
// console.log(link.hasAttribute('target')) // Verifica se há valor
// link.removeAttribute('target') // Removendo um atributo

// Manipulação de classes do css

// const elemento = document.querySelector('#meuId')
// elemento.classList.add('novaClasse')

// elemento.classList.remove('novaClasse')

// elemento.classList.toggle('outraClasse')
// elemento.classList.toggle('outraClasse')

// // Navegação entre nós

// const elemento2 = document.querySelector('#meuInput')
// const pai = elemento2.parentNode
// console.log(pai)


// // Obter o 1º filho

// const primeiroFilho = pai.firstChild
// console.log(primeiroFilho)

// const ultimoFilho  = pai.lastChild
// console.log(ultimoFilho)

// Manipulação de estrutura do DOM

// const novoElemento1 = document.createElement('h1')
// novoElemento1.textContent = 'Meu h1'
// console.log(novoElemento1)

// const novoElemento = document.createElement('div')
// console.log(novoElemento)
// novoElemento.textContent = 'Minha div de JavaScript'

// // Adicionando o novo elemento no HTML
// document.body.appendChild(novoElemento)

// document.body.appendChild(novoElemento1)

// const elementoDiv = document.querySelector('#meuId')

// document.body.insertBefore(novoElemento1, elementoDiv)
// document.body.removeChild(novoElemento1)

// **** EVENTOS

// click

const botao = document.querySelector('button')
botao.addEventListener('click', function(){
    alert('Márcio')
})

const botao2 = document.querySelector('#botaoRemover')
botao2.addEventListener('click', function(){
    console.log('Remover')
})

// mouse

// const elementoMouse = document.querySelector('#meuFormulario')
// elementoMouse.addEventListener('mouseover', function(){
//     console.log('Passei aqui!')
// })

// teclado

const elementoTeclado = document.querySelector('#meuInput')
elementoTeclado.addEventListener('keydown', function (){
    console.log('Tecla pressionada.')
})

// Eventos de formulário

const form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('Formulário enviado.')
})

// propagação de eventos

document.querySelector('#elementoPai').addEventListener('click', function (event){
   event.stopPropagation()
    console.log('Click capturado no pai')
})

document.querySelector('#elementoFilho').addEventListener('click', function (event){
    event.stopPropagation()
        console.log('Elemento filho')
})

document.querySelector('#meuLink').addEventListener('click', function (event){
    event.preventDefault()
    console.log('Clicou no link')
})

// Linha adicionada