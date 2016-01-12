$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$numero = document.getElementById("numero");
$ajouter = document.getElementById("ajouter");
$recherche = document.getElementById("recherche");
$rechercher = document.getElementById("rechercher");
$resultatRecherche = document.getElementById("resultatRecherche");

contacts = [
  {
    prenom: "Julien",
    nom: "Grillot",
    numero: "0123456789"
  },
  {
    prenom: "John",
    nom: "Smith",
    numero: "0123456789"
  }
  {
    prenom: "Gaëtan",
    nom: "Petitjean",
    numero: "0600000000"
  }
];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}

//alert(texteContact(contacts[0]));

function afficherListe() {
    elements = "";
    for (i=0; i<contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficherListe();
}

function rechercher() {
    recherche = $recherche.value;
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].prenom == recherche || contacts[i].nom == recherche || contacts[i].numero == recherche) {
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    $resultatRecherche.innerHTML = elements;
}

$ajouter.onclick = ajouter;
$rechercher.onclick = rechercher;
afficherListe();
