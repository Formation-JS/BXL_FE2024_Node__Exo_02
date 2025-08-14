# Exo Node 02

## 1) Calcule de l'aire et du périmètre
Créer un projet en NodeJS qui permet à l'utilisateur de calculer l'aire et le périmètre d'un cercle, d'un rectangle et d'un triangle rectangle.

### Contraintes
- Le projet doit être configuré avec npm.
- Le calcul doit être réaliser via un module avec les fonctions suivantes : 
   - getPerimetre(forme)
   - getAire(forme)

### Description du fonctionnement d'une "forme"
C'est un objet JS qui possède un attribut pour définir son type et les attributs lier à son type.  
Il possède les attributs suivants en fonction de sont type :  
 - Cercle : rayon
 - Rectangle : hauteur/largeur
 - Triangle : hauteur/largeur
 - Carré : cote

### Exemple de code
```js
const f1 = {
    type: 'Cercle',
    rayon: 42
};

const f2 = {
    type: 'Rectangle',
    hauteur: 10,
    largeur: 2
};

const f3 = {
    type: 'Triangle',
    hauteur: 10,
    largeur: 2
};

const r1 = votreModule.getPerimetre(f1);
const r2 = votreModule.getAire(f2);
const r3 = votreModule.getAire(f3);
```

## 2) Obtenir le nombre de jours avant un évent
Créer un projet en NodeJS qui permet d'obtenir le nombre de jours avant les événements suivants : 
- Le jour de Noël
- La fête nationale en Belgique (21 juillet)
- Les vacances d'été (Basique -> 01/07 jusqu'au 31/08)

Remarque, si la demande est faire le jour J, lui indiqué que l'évent est en cours.

### Bonus
Permettre à l'utilisateur d'obtenir le nombre de jours avec son anniversaire.