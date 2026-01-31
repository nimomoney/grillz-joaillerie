// main.js
import { catalogue } from './produits.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const produit = catalogue[id];

if (produit) {
    document.getElementById('prod-title').innerText = produit.titre;
    document.getElementById('prod-img').src = produit.image;
    // ... etc
} else {
    // Si l'ID n'existe pas, on peut rediriger vers l'accueil
    console.error("Produit non trouvé");
}