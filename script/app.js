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
        let selected = $('.selected');
        let toSelect = selected.parent().next().find('div');
        
        if(toSelect.length === 0) {
            selected.removeClass('selected');
            $('a:first-child').find('.item').addClass('selected');
        } else {
            selected.removeClass('selected');
            toSelect.addClass('selected');
        }
    }
    if(evt.keyCode === 37) {
        let selected = $('.selected');
        let toSelect = selected.parent().prev().find('div');
        
        if(toSelect.length === 0) {
            selected.removeClass('selected');
            $('a:last-child').find('.item').addClass('selected');
        } else {
            selected.removeClass('selected');
            toSelect.addClass('selected');
        }
    }
    if(evt.keyCode === 13) {
        console.log('lol');
    }
}


//Main
let produitsHtml = $('.produits');

for(let compteur = 0; compteur < produits.length ;compteur++) {
    let result = produits[compteur];

    produitsHtml.append('<a href="#"><div class="item"><h1>' + result.nom + '</h1>' + '<h2>' + result.type + '</h2><img src="' + result.lien + result.compteur + '"></div></a>');
}

let divItems = $('.item');
divItems[0].classList.add('selected');

$(document).on('keyup',switchItem)


    
