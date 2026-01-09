% -------------------
% Hello World
% -------------------
hello :- write('Hello, world!'), nl.

% -------------------
% Somme de 0 à N (récursive)
% -------------------
somme(0, 0).
somme(N, S) :-
    N > 0,
    N1 is N - 1,
    somme(N1, S1),
    S is S1 + N.

% -------------------
% Somme de 1 à N
% (c’est juste une alias pour somme de 0 à N)
% -------------------
somme1aN(N, S) :- somme(N, S).



% factorielle de 0
factorielle(0, 1).

% factorielle récursive
factorielle(N, F) :-
    N > 0,
    N1 is N - 1,
    factorielle(N1, F1),
    F is N * F1.
