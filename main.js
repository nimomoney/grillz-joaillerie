// main.js
import { catalogue } from './produits.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log("L'ID reçu est :", id); // Ajoute cette ligne
const produit = catalogue[id];

if (produit) {
    // On remplit les balises de article.html
    document.getElementById('prod-title').innerText = produit.titre;
    document.getElementById('prod-img').src = produit.image;
    document.getElementById('prod-price').innerText = "Prix : " + produit.prix;
    document.getElementById('prod-desc').innerText = produit.description;
} else {
    console.error("Produit non trouvé dans le catalogue !");
}