console.log("Hello, world!");
// Calculer la somme des nombres de 1 à 5 et afficher le résultat avec sum
/*
let sum = 0;
for (let i = 1; i <= 5; i++)
{
    sum += i;
}
console.log("Somme =", sum);$
$*/
// Version plus concise utilisant reduce
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (acc, val) { return acc + val; }, 0);
console.log("Somme =", sum);
//Factorielle d'un nombre
function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
console.log("Factorielle de 5 =", factorial(5));
// Facctoriel avec recursivité 
function factorialRecursive(n) {
    if (n <= 1)
        return 1;
    return n * factorialRecursive(n - 1);
}
console.log("Factorielle récursive de 5 =", factorialRecursive(5));
