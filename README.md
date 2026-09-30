# Raphaël Frauli — Portfolio BTP

Portfolio statique consacré aux études de prix et à l’économie de la construction. HTML, CSS et JavaScript natifs, sans framework, dépendance, police distante ni étape de build.

## Organisation

- `index.html` : contenu, galerie, parcours, coordonnées et modale native.
- `css/styles.css` : mise en page responsive, typographie, accessibilité.
- `js/main.js` : menu mobile et lecteur de planches avec zoom.
- `assets/images/` : huit planches WebP, aperçus de 900 px et image de partage.
- `LogoFavicon.png` : favicon d’origine conservé ; versions optimisées dans `assets/`.
- `.nojekyll` : publication statique sans traitement Jekyll.

Les anciens fichiers restent accessibles sur la branche `GitPageCV`. Aucun code ou élément graphique de l’ancien site n’est repris, sauf le favicon. Les coordonnées et les éléments factuels du parcours proviennent des informations du dépôt.

## Prévisualisation

Depuis la racine du dépôt : `python -m http.server 8080`, puis ouvrir `http://localhost:8080`. Le site fonctionne également en ouvrant `index.html` directement.

## GitHub Pages

Le dépôt `RaphaelFrauli.github.io` est prévu pour `https://raphaelfrauli.github.io/`. Dans **Settings → Pages**, choisir **Deploy from a branch**, branche **main**, dossier **/ (root)**. Tous les chemins de CSS, JS et images sont relatifs.

## Planches

Les PNG fournis dans le dossier parent sont conservés intacts. Les WebP sont exportés sans recadrage ni retouche, en résolution originale (1491 × 1055) et en aperçu (900 × 637). Le lecteur charge la version originale à l’ouverture ; **100 %** affiche un pixel de l’image par pixel CSS. Le défilement natif permet de parcourir les détails à la souris, au clavier ou au toucher. **Adapter** rétablit la vue complète.

Pour ajouter une planche, exporter ses deux tailles, ajouter un article dans `.domain-list` et renseigner le titre, le texte, l’alternative et les liens `data-board`. Le lecteur déduit automatiquement l’ordre et le nombre de planches. Sans JavaScript, les liens ouvrent directement les images.

Les familles « Lots techniques » et « Menuiseries, serrurerie et métallerie » ne sont pas des catégories de la galerie. Elles restent visibles à l’intérieur du panorama fourni, préservé tel quel.

## Ajouter de vrais dossiers anonymisés

La section `#dossiers` est masquée et le `template#dossier-template` fournit une structure vide : typologie et contexte, mission et lots, méthode et outils, extraits. Pour publier un dossier :

1. Insérer dans `.dossier-list` un article basé sur le template, uniquement avec des données réelles et anonymisées.
2. Ajouter les extraits autorisés avec dimensions, texte alternatif et légende.
3. Retirer l’attribut `hidden` de `#dossiers` et ajouter le lien correspondant dans la navigation.

Ne pas publier de coordonnées de clients, de valeurs confidentielles, de chiffres inventés ou de prétentions de réalisation des travaux. Les planches sont des schémas de principe de domaines étudiés, pas des plans d’exécution.

## Vérifications de la refonte

Vérifié le 1er octobre 2026 dans Edge/Chromium : neuf largeurs (320, 360, 375, 390, 430, 768, 1024, 1280 et 1440 px), absence de débordement horizontal, huit images chargées dans leur ratio, liens locaux et ancres, menu mobile, zoom et résolution réelle, focus contenu dans la modale, Escape, fermeture par le fond, retour du focus, blocage du défilement et orientation paysage. Navigation et accès aux images également vérifiés sans JavaScript. Aucune erreur de console. Vérifications syntaxiques JavaScript et `git diff --check` réussies. Aucun build requis.
