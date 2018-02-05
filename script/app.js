let produits = [{
    "nom" : "Fraise",
    "type" : "fruit",
    "compteur" : 1,
    "lien" : "https://picsum.photos/600/300?image="
},
{
    "nom" : "Pomme",
    "type" : "fruit",
    "compteur" : 2,    
    "lien" : "https://picsum.photos/600/300?image="    
}];

let produitsHtml = $('.produits');
    for(let compteur = 0; compteur < produits.length ;compteur++) {
        let result = produits[compteur];
        produitsHtml.append('<div cless="panier"><p>' + result.nom + '</p>' + '<p>' + result.type + '</p><img src="' + result.lien + result.compteur + '"></div>');
    }
    
