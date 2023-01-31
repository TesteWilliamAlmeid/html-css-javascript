"use strict"

let num = 11
let res = num % 2

if (res == 0) {
    console.log("Par")
} else {
    console.log("Impar")
}

// Teste Logico ? = true(1) / false (0)
// 1 = 1°
// 0 = 2° 
res = ((num%2) ? "Par" : "Impar")
console.log(res)