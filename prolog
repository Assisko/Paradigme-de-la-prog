% -------------------
% Faits
% -------------------
parent(jean, paul).
parent(paul, luc).
parent(marie, luc).
parent(sophie, paul).
parent(sophie, claire).

% -------------------
% Règles de base
% -------------------

% Grand-parent : X est grand-parent de Y si X est parent d’un Z qui est parent de Y
grandparent(X, Y) :- parent(X, Z), parent(Z, Y).

% Frère/soeur : X est frère/soeur de Y si ils partagent un parent
sibling(X, Y) :- parent(Z, X), parent(Z, Y), X \= Y.

% Ancêtre (récursive)
ancestor(X, Y) :- parent(X, Y).               % base
ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y).  % récursion

% Oncle/tante
uncle_or_aunt(X, Y) :- sibling(X, Z), parent(Z, Y).

% Cousin : X est cousin de Y si le parent de X est sibling du parent de Y
cousin(X, Y) :- parent(P1, X), parent(P2, Y), sibling(P1, P2), X \= Y.
