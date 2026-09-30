# Raphaël Frauli — Portfolio BTP

Portfolio statique consacré aux études de prix et à l’économie de la construction. HTML, CSS et JavaScript natifs, sans framework, dépendance, police distante ni étape de build.

## Organisation

- `index.html` : contenu, galerie, parcours, coordonnées et modale native.
- `css/styles.css` : mise en page responsive, typographie, accessibilité.
- `js/main.js` : menu mobile, navigation active et lecteur de planches avec zoom, clavier et plein écran.
- `assets/images/` : huit nouvelles planches de domaines, aperçus de 900 et 520 px et image de partage.
- `assets/details/` : sept planches de coupe fournies, versions complètes sans perte et aperçus.
- `docs/verification-planches.md` : contrôle graphique et technique des images, avec erreurs et références.
- `docs/coupes-inventaire.json` : fichiers sources des coupes, dimensions et empreintes SHA-256.
- `LogoFavicon.png` : favicon d’origine conservé ; versions optimisées dans `assets/`.
- `.nojekyll` : publication statique sans traitement Jekyll.

Les anciens fichiers restent accessibles sur la branche `GitPageCV`. Aucun code ou élément graphique de l’ancien site n’est repris, sauf le favicon. Les coordonnées et les éléments factuels du parcours proviennent des informations du dépôt.

## Prévisualisation

Depuis la racine du dépôt : `python -m http.server 8080`, puis ouvrir `http://localhost:8080`. Le site fonctionne également en ouvrant `index.html` directement.

## GitHub Pages

Le dépôt `RaphaelFrauli.github.io` est prévu pour `https://raphaelfrauli.github.io/`. Dans **Settings → Pages**, choisir **Deploy from a branch**, branche **main**, dossier **/ (root)**. Tous les chemins de CSS, JS et images sont relatifs.

## Planches

Les PNG fournis dans les dossiers parents `planches` et `PlanchesCoupes` sont conservés intacts. Les WebP sont exportés sans recadrage ni retouche, en résolution originale (1491 × 1055 pour les domaines, 1448 × 1086 pour les coupes) et en aperçus de 900 et 520 px de large. Les versions complètes des coupes utilisent une compression sans perte, vérifiée pixel par pixel contre les PNG sources.

Le lecteur charge la version complète à l’ouverture ; **100 %** affiche un pixel de l’image par pixel CSS. Le défilement natif permet de parcourir les détails à la souris, au clavier ou au toucher. **Adapter** rétablit la vue complète, **Plein écran** agrandit le lecteur et utilise l’API du navigateur lorsqu’elle est disponible. Les flèches gauche/droite changent de planche, sauf lorsque la zone d’image a le focus : elles servent alors au défilement. Échap ferme le lecteur ; le focus revient au lien initial.

Pour ajouter une planche, exporter ses trois tailles, ajouter un article dans `.domain-list` ou `.detail-list` et renseigner le titre, le texte, l’alternative et les liens `data-board`. Respecter ses dimensions et son ratio propres. Le lecteur déduit automatiquement l’ordre et le nombre de planches. Sans JavaScript, les liens ouvrent directement les images.

Les familles « Lots techniques » et « Menuiseries, serrurerie et métallerie » ne sont pas des catégories de la galerie. Le nouveau panorama fourni présente les six familles retenues et CALAOS.

Les sept coupes comportent encore des erreurs de repère ou des assemblages à préciser. Un volet « Lecture technique : points à vérifier » est disponible sous chaque fiche. Les liens fabricants servent à comparer les systèmes ; ils ne certifient pas les images. Le neuvième PNG général, exemple de sous-détail de prix, n’est pas publié car ses totaux sont incohérents. Le recalcul figure dans le rapport de vérification.

Le titre d’accueil et le nom sont mis en avant. Aucune photographie personnelle n’a été fournie ; aucun portrait artificiel n’a été ajouté.

## Ajouter de vrais dossiers anonymisés

La section `#dossiers` est masquée et le `template#dossier-template` fournit une structure vide : typologie et contexte, mission et lots, méthode et outils, extraits. Pour publier un dossier :

1. Insérer dans `.dossier-list` un article basé sur le template, uniquement avec des données réelles et anonymisées.
2. Ajouter les extraits autorisés avec dimensions, texte alternatif et légende.
3. Retirer l’attribut `hidden` de `#dossiers` et ajouter le lien correspondant dans la navigation.

Ne pas publier de coordonnées de clients, de valeurs confidentielles, de chiffres inventés ou de prétentions de réalisation des travaux. Les planches sont des schémas de principe de domaines étudiés, pas des plans d’exécution.

## Vérifications de la refonte

Vérification dans Edge/Chromium : neuf largeurs (320, 360, 375, 390, 430, 768, 1024, 1280 et 1440 px), absence de débordement horizontal, quinze images chargées dans leur ratio, liens locaux et ancres, menu mobile, zoom et résolution réelle, plein écran, flèches du clavier, focus contenu dans la modale, Échap, fermeture par le fond, retour du focus, blocage du défilement et orientation paysage. Navigation et accès aux images également contrôlés sans JavaScript. Contrôles de syntaxe JavaScript et `git diff --check` avant publication. Aucun build requis.
