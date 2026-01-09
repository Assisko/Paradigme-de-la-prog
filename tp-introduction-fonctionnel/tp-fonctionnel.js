console.log("DEBUT DU SCRIPT");
// TP – Introduction au fonctionnel
// Objectif : comprendre les fonctions pures, l’immutabilité et les opérations sur tableaux
/* ============================================================
   Partie 1 — Fonctions pures et effets de bord
   ============================================================ */
let counter = 0;
// Fonction pure :
// dépend uniquement de ses paramètres
function add(a, b) {
    return a + b;
}
// Fonction impure :
// utilise et modifie une variable externe
function increment() {
    counter = counter + 1;
    return counter;
}
/*
- add est prévisible car pour les mêmes valeurs, le résultat est toujours le même.
- increment ne l’est pas car la valeur de counter change à chaque appel.
*/
console.log("=== Partie 1 ===");
console.log("add(2,3) =", add(2, 3));
console.log("add(2,3) =", add(2, 3));
console.log("increment() =", increment());
console.log("increment() =", increment());
/* ============================================================
   Partie 2 — Immutabilité
   ============================================================ */
console.log("\n=== Partie 2 ===");
const student = { name: "Léo", grade: 14 };
// On retourne un nouvel objet sans modifier l'objet original
function updateGrade(s, newGrade) {
    const newStudent = {
        name: s.name,
        grade: newGrade,
    };
    return newStudent;
}
const studentUpdated = updateGrade(student, 18);
console.log("student original =", student); // grade reste à 14
console.log("student updated  =", studentUpdated); // grade à 18
/* ============================================================
   Partie 3 — Fonction d’ordre supérieur
   ============================================================ */
console.log("\n=== Partie 3 ===");
// Cette fonction applique une fonction f à une valeur x, n fois
function applyNTimes(f, n, x) {
    let result = x;
    for (let i = 0; i < n; i = i + 1) {
        result = f(result);
    }
    return result;
}
function double(x) {
    return x * 2;
}
console.log("applyNTimes(double, 3, 1) =", applyNTimes(double, 3, 1));
/* ============================================================
   Partie 4 — Manipulation de tableaux
   ============================================================ */
console.log("\n=== Partie 4 ===");
const numbers = [1, 2, 3, 4, 5, 6];
/*
Exercice 4.1 :
- garder les nombres pairs
- les multiplier par 2
- calculer la somme
*/
// Étape 1 : garder les nombres pairs
const evenNumbers = [];
for (let i = 0; i < numbers.length; i = i + 1) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
// Étape 2 : multiplier par 2
const doubledNumbers = [];
for (let i = 0; i < evenNumbers.length; i = i + 1) {
    doubledNumbers.push(evenNumbers[i] * 2);
}
// Étape 3 : calculer la somme
let total = 0;
for (let i = 0; i < doubledNumbers.length; i = i + 1) {
    total = total + doubledNumbers[i];
}
console.log("Ex 4.1 total =", total); // 24
/*
Exercice 4.2 :
- sum : somme des éléments
- average : moyenne
- product : produit des éléments
*/
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        total = total + arr[i];
    }
    return total;
}
function average(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return sum(arr) / arr.length;
}
function product(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i = i + 1) {
        result = result * arr[i];
    }
    return result;
}
console.log("Ex 4.2 sum(numbers)     =", sum(numbers));
console.log("Ex 4.2 average(numbers) =", average(numbers));
console.log("Ex 4.2 product(numbers) =", product(numbers));
/* ============================================================
   Partie 5 — Fonctions sur les tableaux
   ============================================================ */
console.log("\n=== Partie 5 ===");
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];
/*
Exercice 5.1 :
Trouver le premier utilisateur majeur
*/
let firstAdult = null;
for (let i = 0; i < users.length; i = i + 1) {
    if (users[i].age >= 18) {
        firstAdult = users[i];
        break;
    }
}
console.log("Ex 5.1 firstAdult =", firstAdult);
/*
Exercice 5.2 :
- vérifier s’il y a au moins un mineur
- vérifier si tous ont plus de 10 ans
*/
let hasMinor = false;
for (let i = 0; i < users.length; i = i + 1) {
    if (users[i].age < 18) {
        hasMinor = true;
        break;
    }
}
let allOver10 = true;
for (let i = 0; i < users.length; i = i + 1) {
    if (users[i].age <= 10) {
        allOver10 = false;
        break;
    }
}
console.log("Ex 5.2 hasMinor  =", hasMinor);
console.log("Ex 5.2 allOver10 =", allOver10);
/*
Exercice 5.3 :
Créer un tableau avec les noms et vérifier leur présence
*/
const names = [];
for (let i = 0; i < users.length; i = i + 1) {
    names.push(users[i].name);
}
function contains(arr, value) {
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
console.log("Ex 5.3 names =", names);
console.log('Ex 5.3 "Alice" présent =', contains(names, "Alice"));
console.log('Ex 5.3 "Eve" présent   =', contains(names, "Eve"));
/*
Exercice 5.4 :
Récupérer tous les hobbies dans un seul tableau
*/
const usersWithHobbies = [
    { name: "Alice", hobbies: ["climbing", "yoga"] },
    { name: "Bob", hobbies: ["gaming"] },
    { name: "Charlie", hobbies: ["reading", "hiking"] },
];
const allHobbies = [];
for (let i = 0; i < usersWithHobbies.length; i = i + 1) {
    for (let j = 0; j < usersWithHobbies[i].hobbies.length; j = j + 1) {
        allHobbies.push(usersWithHobbies[i].hobbies[j]);
    }
}
console.log("Ex 5.4 allHobbies =", allHobbies);
// Copier le tableau (sans modifier l’original)
const usersCopy = [];
for (let i = 0; i < users.length; i = i + 1) {
    usersCopy.push(users[i]);
}
// Tri simple par âge (tri à bulles)
for (let i = 0; i < usersCopy.length; i = i + 1) {
    for (let j = 0; j < usersCopy.length - 1; j = j + 1) {
        if (usersCopy[j].age > usersCopy[j + 1].age) {
            const temp = usersCopy[j];
            usersCopy[j] = usersCopy[j + 1];
            usersCopy[j + 1] = temp;
        }
    }
}
// Prendre les 2 plus jeunes
const twoYoungest = [usersCopy[0], usersCopy[1]];
console.log("Ex 5.5 original users =", users);
console.log("Ex 5.5 sorted users   =", usersCopy);
console.log("Ex 5.5 twoYoungest    =", twoYoungest);
