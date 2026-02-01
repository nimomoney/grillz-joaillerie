// main.js
import { catalogue } from './produits.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const produit = catalogue[id];

if (produit) {
    document.getElementById('prod-title').innerText = produit.titre;
    document.getElementById('prod-img').src = produit.image;
    document.getElementById('prod-price').innerText = "Prix : " + produit.prix;
    document.getElementById('prod-desc').innerText = produit.description;
    
    // Ajout des spécifications techniques
    document.getElementById('prod-materiau').innerText = produit.materiau;
    document.getElementById('prod-delai').innerText = produit.delai;
    document.getElementById('prod-sertissage').innerText = produit.sertissage;
} else {
    console.error("Produit non trouvé !");
}