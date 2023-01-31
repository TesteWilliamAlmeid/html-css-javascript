"use strict"

function teste() {
    console.log("Usando o let dentro do IF")
    if (true) {
        let nome = "Sim"
        console.log("Dentro do IF da função teste: " + nome)
    }
    console.log("Dentro da função teste: Não")
}

teste()

console.log("Fora da Função teste: Não")

function teste1() {
    console.log("Usando var dentro do IF")
    if (true) {
        var nome1 = "Sim"
        console.log("Dentro do IF da função teste: " + nome1)
    }
    console.log("Dentro da função teste: " + nome1)
}

teste1()

console.log("Fora da Função teste: Não")

console.log("Mudando a variavel de let")
let mudar1 = "1"
console.log(mudar1)
mudar1 = "2"
console.log(mudar1)

console.log("Mudando a variavel de var")
var mudar2 = "2"
console.log(mudar2)
mudar2 = "1"
console.log(mudar2)

console.log("Mudando a variavel de const")
const mudar3 = "3"
console.log(mudar3)
console.log("Não da pra mudar o const no código")