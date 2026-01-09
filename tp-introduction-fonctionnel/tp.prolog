
Partie 1 – Requêtes

## Exercice 1 – Requêtes


    1. Qui est rouge ?
?- couleur(X, rouge).

    2. Qu’est-ce que mange Léa ?
?- mange(lea, X).

    3. Qui mange une pomme ?
?- mange(X, pomme).

     4. Quel objet est de couleur jaune ?
?- couleur(X, jaune).





Partie 2 – Règles


Règle donnée
aime(X, Y) :- mange(X, Y).

Faits
couleur(carotte, orange).

mange(bob, carotte).
mange(claire, banane).


## Exercice 2


Écrire des règles :
1. aime_fruit(Personne) : 
aime_fruit(Personne) :-
    mange(Personne, Aliment),
    type(Aliment, fruit).

    Requête de test :
    ?- aime_fruit(X).

2. meme_couleur(X, Y) :
meme_couleur(X, Y) :-
    couleur(X, C),
    couleur(Y, C),
    X \= Y.

    Requête de test :
    ?- meme_couleur(X, Y).


3. aiment_la_meme_chose(A, B) :

aiment_la_meme_chose(A, B) :-
    mange(A, X),
    mange(B, X),
    A \= B.

    Requête de test :
    ?- aiment_la_meme_chose(A, B).





Partie 3 – Listes

Exercice 3 – Longueur d’une liste

La première règle dit que la longueur d’une liste vide est 0.
La seconde enlève la tête de la liste et calcule récursivement la longueur du reste, 
puis ajoute 1.


Pourquoi _ dans la tête de la règle ?
_ signifie « valeur ignorée » la tête de la liste non utilisé ici , seul T compte




Exercice 4 – Somme d’une liste

somme([], 0).
somme([H|T], S) :-
    somme(T, S1),
    S is S1 + H.





Partie 4 – Relations familiales

Exercice 5 – Règles

 1. Père :
 pere(P, E) :-
    parent(P, E),
    homme(P).

2. Mère :
mere(M, E) :-
    parent(M, E),
    femme(M).

3. Grand-parent :    
grand_parent(GP, E) :-
    parent(GP, P),
    parent(P, E).

4. Ancêtre :
ancetre(A, E) :-
    parent(A, E).

ancetre(A, E) :-
    parent(A, X),
    ancetre(X, E).

5. Frère ou sœur :
frere_ou_soeur(A, B) :-
    parent(P, A),
    parent(P, B),
    A \= B.


 Exercice 6 – Test 

?- grand_parent(sara, luc).
?- ancetre(andre, luc).
?- frere_ou_soeur(luc, X).



Partie 5 - Petits problèmes logiques


Exercice 7 - Membre d’une liste

membre(X, [X|_]).
membre(X, [_|T]) :-
membre(X, T).

Test :

    ?- membre(3, [1,2,3]).
    ?- membre(X, [1,2,3]).



Exercice 8 – Maximum d’une liste

max_liste([X], X).

max_liste([H|T], Max) :-
    max_liste(T, MaxT),
    ( H > MaxT -> Max = H ; Max = MaxT ).

Test :

    ?- max_liste([3,1,9,2], M).






























