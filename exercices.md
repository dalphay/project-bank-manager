Vue Dog Manager :
Le but de l'exercice est de créer 3 components, un component DogManager qui orchestrera le tout, qui sera le seul à avoir accès aux données
Un component DogTable qui affichera un array de chien sous forme de table bootstrap
Un component AddDog qui contiendra un formulaire d'ajout de chien qui, au submit, déclenchera un event
I. Le DogManager
1) Créer un fichier DogManager.vue avec un scaffold classique, son name et tout
2) Lui mettre pour le moment des datas en dur : un array d'objet Dog (id, name, race, birthdate)
3) Lui créer une méthode qui ajoute un nouveau Dog à la liste (juste un array.push) et une méthode qui supprime un chien par son id (juste un array.filter)
4) Enregistrer ce component sur le App et l'ajouter à son template, genre au dessus ou à la place de <First></First>
II. Le DogTable
1) Créer un fichier DogTable.vue avec un scaffold classique, son name et tout
2) Faire qu'il attende en props une liste de chien
3) Utiliser cette prop pour faire dans le template une table et un v-for pour générer le tableau de chien
4) Enregistrer ce component sur le DogManager et l'ajouter au template avec l'argument qu'il faut
III. Le AddDog
1) Créer un fichier AddDog.vue avec un scaffold classique, son name et tout
2) Créer dans le template un form avec les différents inputs pour le chien, lié via des v-model à des data du controller AddDog
3) Ajouter une méthode au submit du form qui emittera un event en lui passant en paramètre le dog ajouté
4) Enregistrer ce component sur le DogManager, l'ajouter au template et lié son event à la méthode d'ajout du DogManager