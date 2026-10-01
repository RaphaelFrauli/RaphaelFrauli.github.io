# Raphaël Frauli — Portfolio BTP

Portfolio statique consacré aux études de prix et à l’économie de la construction. HTML, CSS et JavaScript natifs, sans framework, dépendance, police distante ni étape de build.

## Organisation

- `index.html` : bandeau de déploiement, accueil et panorama, galerie par catégorie, coordonnées et modale native.
- `css/styles.css` : mise en page responsive, typographie, accessibilité.
- `js/main.js` : menu mobile, sélection de catégorie, onglets des planches et lecteur avec zoom, clavier et plein écran.
- `assets/images/` : huit nouvelles planches de domaines, aperçus de 900 et 520 px et image de partage.
- `assets/details/` : sept planches de coupe fournies, versions complètes sans perte et aperçus.
- `docs/verification-planches.md` : contrôle graphique et technique des images, avec erreurs et références.
- `docs/coupes-inventaire.json` : fichiers sources des coupes, dimensions et empreintes SHA-256.
- `LogoFavicon.png` : favicon d’origine conservé ; versions optimisées dans `assets/`.
- `.nojekyll` : publication statique sans traitement Jekyll.

Les anciens fichiers restent accessibles sur la branche `GitPageCV`. Aucun code ou élément graphique de l’ancien site n’est repris, sauf le favicon. Les coordonnées proviennent des informations du dépôt.

## Prévisualisation

Depuis la racine du dépôt : `python -m http.server 8080`, puis ouvrir `http://localhost:8080`. Le site fonctionne également en ouvrant `index.html` directement.

## GitHub Pages

Le dépôt `RaphaelFrauli.github.io` est prévu pour `https://raphaelfrauli.github.io/`. Dans **Settings → Pages**, choisir **Deploy from a branch**, branche **main**, dossier **/ (root)**. Tous les chemins de CSS, JS et images sont relatifs.

## Planches

Les PNG fournis dans les dossiers parents `planches` et `PlanchesCoupes` sont conservés intacts. Les WebP sont exportés sans recadrage ni retouche, en résolution originale (1491 × 1055 pour les domaines, 1448 × 1086 pour les coupes) et en aperçus de 900 et 520 px de large. Les versions complètes des coupes utilisent une compression sans perte, vérifiée pixel par pixel contre les PNG sources.

Le lecteur charge la version complète à l’ouverture ; **100 %** affiche un pixel de l’image par pixel CSS. Le défilement natif permet de parcourir les détails à la souris, au clavier ou au toucher. **Adapter** rétablit la vue complète, **Plein écran** agrandit le lecteur et utilise l’API du navigateur lorsqu’elle est disponible. Les flèches gauche/droite changent de planche, sauf lorsque la zone d’image a le focus : elles servent alors au défilement. Échap ferme le lecteur ; le focus revient au lien initial.

La galerie met en avant les coupes dédiées en gros œuvre, enveloppe, plâtrerie et sols ; leurs grandes planches composées contenaient déjà ces mêmes ouvrages. Peinture, extérieurs et CALAOS gardent leur planche générale, car aucun détail indépendant ne leur est associé dans le site. La galerie contient dix planches ; une seule catégorie et une seule planche sont affichées à la fois. Le sommaire latéral devient un sélecteur natif sous 951 px ; les onglets font défiler les coupes d’un même domaine. Les flèches, Début et Fin naviguent entre les onglets. Les liens directs vers une catégorie ou une coupe sont conservés. Le panorama global reste accessible et replié au chargement.

Pour ajouter une planche, exporter ses trois tailles, ajouter une figure avec un identifiant unique dans `.category-boards` de la catégorie correspondante et renseigner l’alternative, le titre du lecteur et le lien `data-board`. Respecter ses dimensions et son ratio propres. Le lecteur déduit automatiquement l’ordre et le nombre de planches de la catégorie ouverte. Sans JavaScript, toutes les catégories et leurs planches restent visibles et les liens ouvrent directement les images.

Les familles « Lots techniques » et « Menuiseries, serrurerie et métallerie » ne sont pas des catégories de la galerie. Le nouveau panorama fourni présente les six familles retenues et CALAOS.

Les textes descriptifs, les volets de lecture technique et les liens répétés « Voir la planche » ont été retirés de la galerie à la demande de Raphaël. Les images restent des liens accessibles vers le lecteur. Les blocs Méthode et Parcours ont été retirés ; les coordonnées sont regroupées dans un pied de page compact.

Le bandeau demandé affiche « PORTFOLIO EN COURS DE DÉPLOIEMENT ! » et « Les dessins présentés sont en cours de vérification. ». Les remarques techniques sont conservées dans `docs/verification-planches.md`. Les sept coupes comportent encore des erreurs de repère ou des assemblages à préciser ; leur intégration ne constitue pas une validation technique. Le neuvième PNG général, exemple de sous-détail de prix, n’est pas publié car ses totaux sont incohérents. Le recalcul figure dans le rapport.

Le titre d’accueil et le nom sont mis en avant. Aucune photographie personnelle n’a été fournie ; aucun portrait artificiel n’a été ajouté.

## Vérifications de la refonte

Contrôles prépublication du lecteur et de la galerie dans Edge/Chromium : neuf largeurs (320, 360, 375, 390, 430, 768, 1024, 1280 et 1440 px), sélection des sept catégories, absence de débordement horizontal, liens directs vers les coupes, onglets au clavier et menu mobile. Lecteur : résolution réelle à 100 %, zoom, plein écran, flèches, focus contenu dans la modale, Échap et retour du focus. La galerie présente dix planches, accessibles sans JavaScript ; le panorama séparé s’ouvre sur demande. Le contrôle avant publication portait sur quinze images ; les quatre planches générales redondantes ont depuis été retirées des articles concernés.
