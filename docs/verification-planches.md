# Vérification des planches et des coupes

Contrôle éditorial et graphique du 1er octobre 2026. Neuf PNG de 1491 × 1055 px fournis dans le dossier parent `planches`, puis sept PNG de 1448 × 1086 px dans `PlanchesCoupes`. Les originaux sont conservés intacts.

## Décision de publication

Les huit premières images remplacent les anciennes planches, comme **illustrations générales des domaines**. Elles ne servent pas de référence pour exécuter ou dimensionner un ouvrage. Les sept visuels fournis dans `PlanchesCoupes` complètent la galerie, un ouvrage par fiche avec quatre agrandissements inclus dans chaque image. Ils sont intégrés sans retouche ni recadrage. Les références de lecture sont séparées des images : elles ne certifient pas les dessins fournis.

La neuvième image, « Exemple de sous-détail de prix », est écartée de la publication : ses résultats ne correspondent pas aux opérations indiquées. Les valeurs de cet exemple ne sont pas présentées comme des prix issus d'un dossier de Raphaël Frauli.

Pour limiter les répétitions dans la galerie, les planches dédiées aux fondations, à l'enveloppe, aux cloisons et aux sols sont affichées sans leur grande planche de synthèse : ces planches regroupaient déjà les mêmes vues. Les trois planches générales sans coupe dédiée (peinture, extérieurs et CALAOS) sont conservées. Les fichiers PNG d'origine restent dans le dossier `planches`.

## Contrôle des neuf images

| Fichier | Sujet | Constat et limite de lecture |
| --- | --- | --- |
| `01-panorama-domaines-chiffrage-btp.png` | Panorama | Vue d'ensemble des six familles et de CALAOS. Lisible comme illustration de domaines ; l'axonométrie ne fournit ni cotation ni composition complète des ouvrages. |
| `02-gros-oeuvre-fondations-maconnerie.png` | Gros œuvre | Les fondations, poteaux, murs et pieux sont reconnaissables. Certains repères de la coupe de fondation sont ambigus, notamment « tête de pieu ». Les armatures, ancrages et liaisons ne peuvent pas être validés à partir de cette image. Il faut les études structure et géotechnique du projet. |
| `03-isolation-facades-etancheite.png` | Isolation, façades, étanchéité | Les couches et profils sont illustrés mais leur identification et certains points de fixation restent ambigus. La nappe drainante ne doit pas être assimilée à l'étanchéité. Raccords, relevés, filtrations et évacuation nécessitent les détails du système retenu. Voir les points de lecture des coupes D02 et D03 ci-dessous. |
| `04-cloisons-platrerie-plafonds.png` | Cloisons, plâtrerie, plafonds | La « coupe de cloison » devant une maçonnerie ressemble à une contre-cloison : elle ne décrit pas une cloison distributive avec parements sur deux faces. Les suspentes et supports restent génériques. La nouvelle coupe de cloison D05 précise les interfaces, mais comporte aussi des repères à reprendre. |
| `05-chapes-carrelage-sols.png` | Chapes, carrelage, sols | Dans la coupe centrale, le repère « mortier-colle » n'atteint pas clairement une couche mince située immédiatement sous le carreau. Plusieurs couches sont difficiles à suivre. La bande périphérique et le film ne sont pas suffisamment explicites. Les compositions du parquet, du PVC et du carrelage ne sont pas interchangeables. La nouvelle planche de sol D07 apporte quatre raccords agrandis, mais ses repères de couche doivent également être corrigés. |
| `06-peinture-finitions.png` | Peinture et finitions | La succession des opérations est illustrative. Les couches sont volontairement amplifiées. Le traitement d'une fissure exige d'abord l'identification de sa cause ; l'image ne définit pas une réparation adaptée à tous les supports. |
| `07-amenagements-exterieurs-vrd.png` | Extérieurs et VRD | Pavés, bordures, gabions et drainage sont identifiables. L'image ne permet pas de vérifier la stabilité, les fondations, les granulométries, la filtration ni le raccordement à un exutoire. Aucune valeur de dimensionnement n'en est déduite. |
| `08-calaos-domotique-automatisation.png` | CALAOS | Le serveur CALAOS et l'automate WAGO ont des fonctions différentes ; « contrôleur CALAOS » est trop générique. IP et KNX ne désignent pas le même réseau. Les équipements dessinés ne permettent pas d'identifier toutes les références. L'image ne définit ni protections ni sections ni schéma de puissance. |
| `09-exemple-sous-detail-de-prix.png` | Sous-détail de prix | Déboursé sec cohérent, mais prix de vente, TVA et TTC incohérents avec les majorations affichées. Le terme « marge » doit préciser sa base. Non publié. |

## Recalcul de l'exemple fourni

Calcul uniquement à partir des montants et bases affichés, avec arrondi final au centime :

| Opération de l'exemple | Résultat |
| --- | ---: |
| Fournitures : 7,35 + 2,04 + 0,77 + 0,45 + 0,28 + 0,88 + 3,00 | 14,77 € |
| Main-d'œuvre : 16,80 + 1,80 | 18,60 € |
| Matériel | 1,50 € |
| Déboursé sec | 34,87 € |
| Frais généraux : 15 % du déboursé sec | 5,2305 € |
| Aléas : 5 % de (déboursé sec + frais généraux) | 2,005025 € |
| Majoration : 10 % de (déboursé sec + frais généraux + aléas) | 4,2105525 € |
| Prix de vente HT calculé | **46,32 €**, contre 45,79 € sur l'image |
| TVA de l'exemple : 20 % du prix HT non arrondi | **9,26 €**, contre 9,16 € |
| Prix TTC calculé | **55,58 €**, contre 54,95 € |

Les 10 % sont ici appliqués au coût : il s'agit d'une majoration sur coût. Si l'intention était une marge de 10 % du prix de vente, la formule serait différente. La convention doit être définie avant de refaire une fiche de prix.

## Contrôle des sept planches de coupe

Les images sont plus détaillées, mais elles ne peuvent pas être qualifiées de « coupes extrêmement précises sans erreur ». Les erreurs de repérage ci-dessous restent dans les images intégrées. Un accord de publication ne transforme pas une illustration en plan d'exécution validé. Les notes de lecture sont conservées dans ce rapport de contrôle ; elles ne figurent plus dans la galerie publique, à la demande de Raphaël.

### D01 — Fondation en béton armé (`01-coupe-fondation-beton-arme.png`)

Le dessin associe pieu, longrine, soubassement, dallage et drainage. Dans le zoom 2, les repères « chape » et « revêtement » ne suivent pas clairement l'ordre des couches ; le repère « lit de graviers » du zoom 4 atteint un tube. Le géotextile filtrant et son enveloppe ne sont pas toujours distingués du drain ou de la nappe. Les cadres, armatures d'attente et recouvrements dessinés ne permettent pas de vérifier un ferraillage calculé. Diamètres, enrobages, longueur d'ancrage et fondation exigent les plans structure et l'étude géotechnique. Les valeurs « mini » indiquées ne sont pas validées ici.

### D02 — Mur enterré et soubassement (`02-coupe-mur-enterre-soubassement.png`)

Les flèches « isolant », « membrane » et « nappe » se superposent ou atteignent des couches voisines dans la vue principale. Dans le zoom de transition, l'enduit de façade est repéré sur la maçonnerie côté droit alors que l'enduit visible est côté extérieur gauche. Le drain, son raccord et son enveloppe doivent être distingués. Le raccord de l'étanchéité à l'arase et au pied reste à préciser selon le système choisi. [Dörken — protection et drainage](https://www.doerken.com/fr/fr/delta-terraxx) permet de distinguer la membrane d'étanchéité du géocomposite. La [brochure fabricant, page 11](https://www.doerken.com/be/fr/content/preview/31770/file/Brochure_Delta-Terraxx-Fam_FR.pdf) a été inspectée visuellement : elle ne valide pas le système mixte dessiné avec XPS.

### D03 — Façade ITE au droit d'une baie (`03-coupe-facade-ite-baie.png`)

Plusieurs flèches « sous-enduit », « enduit de finition » et « peinture » de la vue principale atteignent des surfaces jaunes d'isolant ; certains zooms confondent le treillis avec la finition. « Tapée d'isolation de tableau » n'identifie pas correctement un retour d'isolant ; une tapée appartient à la menuiserie. « Rejingot (bavette) » assimile deux éléments différents. Le rejingot et la bavette/appui métallique doivent être nommés séparément. Collage, fixation, retours et raccords ne peuvent pas mélanger tous les isolants et systèmes. Référence de lecture : [Weber — raccords ITE avec menuiserie](https://www.fr.weber/les-carnets-de-details-ite-weber/carnet-de-details-ite-raccords-avec-menuiserie).

### D04 — Toiture-terrasse et acrotère (`04-coupe-toiture-terrasse-acrotere.png`)

Dans le zoom 2, la flèche « pare-vapeur » pointe la descente d'eau au lieu d'un écran horizontal sous isolant. D'autres repères de la naissance et de l'avaloir sont difficiles à distinguer. « Gravillons (épaisseur 40/60) » n'explicite ni l'unité ni s'il s'agit d'une épaisseur ou d'une granulométrie. Les plots semblent porter dans le gravier : leur appui réel et la compatibilité de la protection doivent être définis par un procédé identifié. La formule « bicouche bitumineuse ou PVC/TPO » regroupe des procédés aux raccords différents. La hauteur de relevé affichée ne doit pas être généralisée. Référence : [BMI — couches et systèmes de toiture-terrasse](https://www.bmigroup.com/fr/amenagement-des-toitures-terrasses/).

### D05 — Cloison sur ossature métallique (`05-coupe-cloison-ossature-metallique.png`)

La lecture des montants, plaques et isolant est améliorée. Dans le zoom 4, la flèche « bande résiliente » pointe vers une partie verticale du rail au lieu de l'interface sous celui-ci. La nomenclature « fourrure horizontale de renfort » ne suffit pas à identifier une pièce compatible avec l'ossature. Le passage technique, la réservation de montant et son renforcement nécessitent un détail de système. Entraxes, jeux, épaisseurs de laine et vis indiqués sont liés à un montage choisi, pas universels. Exemple pour comparaison : [Placo — cloison à parement simple](https://www.placo.fr/professionnels/solution/sp00011201/cloisons-7248-1x-placo-phonique-ba-13-1x-placo-phonique-ba-13-stil-ml-48-50-06-simple-ei30-42-db-26), sans attribuer ses performances à l'image.

### D06 — Faux-plafond suspendu (`06-coupe-faux-plafond-suspendu.png`)

Les composants principaux sont nommés, mais les assemblages de suspente, tige filetée et profilés ne définissent pas un système complet identifiable. La mention générique « cheville à frapper ou goujon selon support » ne suffit pas pour choisir un ancrage de plafond. Fixation, type de support, poids de l'isolant, nombre de plaques et entraxes se vérifient ensemble. Le spot paraît entouré d'isolant : son contact avec l'isolant et les dégagements doivent être vérifiés dans sa propre notice, aucun modèle n'étant identifié. Référence : [Placo — choix des suspentes](https://www.placo.fr/suspente).

### D07 — Sol carrelé sur chape isolée (`07-coupe-sol-carrele-chape-isolee.png`)

Dans la vue principale, la pointe « chape flottante » atteint le mortier-colle ; « film » atteint la chape ; « isolant » atteint le film ; « dalle support » atteint l'isolant. Plusieurs de ces décalages se retrouvent dans les zooms. Le repère « plinthe » de la vue principale se rapproche du raccord périphérique plutôt que du corps de plinthe. Le titre « film polyane ou sous-couche résiliente » présente comme alternatives deux composants de fonctions différentes. La coupure du joint de fractionnement et le raccord de seuil doivent être précisés selon le système et la configuration. Références : [Weber — composition des chapes](https://www.fr.weber/realiser-une-chape-adaptee-louvrage) et [préparation des supports](https://www.fr.weber/preparation-du-support-et-application-des-chapes).

## Conservation et qualité des exports

Les sept images originales ne sont pas modifiées. La version complète WebP est sans perte, à 1448 × 1086 px ; les variantes de 900 et 520 px servent seulement à l'affichage dans la page. Le lecteur utilise la version complète et peut afficher sa résolution réelle. `coupes-inventaire.json` contient le nom du fichier source, ses dimensions et son empreinte SHA-256.

La vérification distingue trois sujets : absence de déformation/recadrage à l'export, fonctionnement du lecteur, et lecture technique du contenu. Aucun test informatique ne prouve la conformité d'un assemblage. Les erreurs de flèche décrites ne sont pas corrigées dans les PNG fournis ; une reprise du dessin source ou une retouche technique distincte est nécessaire pour obtenir des repères exacts.

## CALAOS : références de lecture

Les fonctions serveur/automate et l'option de réseau KNX ont été recoupées avec la documentation officielle : [programme de l'automate WAGO](https://doc.calaos.fr/fr/hardware/wago/codesys/), [entrées](https://doc.calaos.fr/fr/hardware/wago/input/), [KNX](https://doc.calaos.fr/fr/hardware/wago/knx/).
