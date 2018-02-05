let produits = [{
    "nom" : "Fraise",
    "type" : "Fruit",
    "compteur" : 1,
    "lien" : "https://picsum.photos/200/100?image="
},
{
    "nom" : "Pomme",
    "type" : "Fruit",
    "compteur" : 2,    
    "lien" : "https://picsum.photos/200/100?image="    
},
{
    "nom" : "Pâtes",
    "type" : "Protéines",
    "compteur" : 3,    
    "lien" : "https://picsum.photos/200/100?image="    
}];


// Fonctions
function switchItem(evt) {
    if(evt.keyCode === 39) {
        console.log('yes');
    }
    if(evt.keyCode === 37) {
        console.log('non');
    }
    if(evt.keyCode === 13) {
        console.log('lol');
    }
}


//Main
let produitsHtml = $('.produits');

for(let compteur = 0; compteur < produits.length ;compteur++) {
    let result = produits[compteur];

    produitsHtml.append('<a href=""><div class="item"><h1>' + result.nom + '</h1>' + '<h2>' + result.type + '</h2><img src="' + result.lien + result.compteur + '"></div></a>');
}

let divItems = $('.item');
divItems[0].classList.add('selected');

$(document).on('keyup',switchItem)


    
