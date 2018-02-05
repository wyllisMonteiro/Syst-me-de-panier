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

let produitsHtml = $('.produits');
    for(let compteur = 0; compteur < produits.length ;compteur++) {
        let result = produits[compteur];
<<<<<<< HEAD
        produitsHtml.append('<div cless="item"><p>' + result.nom + '</p>' + '<p>' + result.type + '</p></div><img src="' + result.lien + result.compteur + '">');
=======
        produitsHtml.append('<a href=""><div class="item"><h1>' + result.nom + '</h1>' + '<h2>' + result.type + '</h2><img src="' + result.lien + result.compteur + '"></div></a>');
>>>>>>> css
    }
    
