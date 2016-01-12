$liste = document.getElementById("liste");
$texte = document.getElementById("texte");
$ajouter = document.getElementById("ajouter");
$annuler = document.getElementById("annuler");

tableau = ["Bob", "Julien", "Roger"];

function afficherListe() {
    elements = "";
    for (i=0; i<tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    tableau.push($texte.value);
    afficherListe();
}

function annuler() {
    tableau.pop($texte.value);
    afficherListe();
}

$ajouter.onclick = ajouter;
$annuler.onclick = annuler;
afficherListe();
