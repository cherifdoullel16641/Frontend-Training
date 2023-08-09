// Ici les bases 

// console.log("je suis entrain de coder mon frere!");
//  nombre = document.querySelectorAll('#monTitre'); 
// const nombre = document.getElementById('monTitre');
// console.log(nombre);
// const allH1 = document.querySelectorAll('.titre');
// console.log(allH1);

// Les fonctions

const titre = document.querySelector('h1'); //Selectionner un element du DOM
const btn = document.querySelector('.btn');
// // btn.addEventListener('click',presentation);
// function presentation(a,b){
//       titre.classList.add('taille-txt');  // Ajoute dynamiquement une classe à h1
//       console.log(a + b)
// }
// presentation(2,5); Ecoute evenement et calcul

btn.addEventListener('click',presentation()) 
titre.addEventListener('mouseenter',presentation())
document.addEventListener('keydown',presentation())
function presentation(){
      console.log("Touche pressée")
}