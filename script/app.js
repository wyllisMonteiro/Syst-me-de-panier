let produits = [{
    "nom" : "Fraise",
    "type" : "fruit"
},
{
    "nom" : "Pomme",
    "type" : "fruit"
}];

let produitsHtml = $('.produits');
    for(let compteur = 0; compteur < produits.length ;compteur++) {
        produitsHtml.append('<li>' + produits[compteur].nom + '</li>');
    }
    
