# c2is-onetea
=====

## Objectifs
L'objectif de C2iS-OneTea est de mettre en place un kick-off, un kick starter, un boilerplate, un bootstrap, etc., enfin peu importe le nom, l'objectif est d'avoir une structure simple, rapide � d�ployer.

Une page html (php, avec ses includes pour le header et le footer), un dossier css (avec quelques fichiers less de base), un dossier js (avec un fichier d'�x�) et un dossier image.


## Mise en place
Pour d�marrer un projet, il faut : 
	- NodeJs d'install� avec NPM
	- Avoir install� les packages "Bower" & "Lessc" (si compilation less avec lessC, sinon compiler GUI)
	- Initier son projet avec les fichiers de C2iS-OneTea
	- Modifier component.json avec les composants souhait�s
	- Lancer la commande Bower Install

## Usages
Les composants install�s par Bower sont install�s dans le projet et doivent �tre appel�s dans le DOM:
	- inc_header pour les css et headJS par exemple
	_ inc_footer pour les JS (avec ou sans head.ready)

_Best Practice_ : minifier, combiner, versionner et cacher les CSS et les JS <br>
Utilisation des appels standards Drupal : AddCSS / AddJS ; utilisation de CSS-JS-Booster (https://github.com/Schepp/CSS-JS-Booster) ; etc.

	
## List of components
### LESS / CSS:

    "c2is-less": "git@github.com:c2is/c2is-less-component.git"
    "normalize": "git@github.com:necolas/normalize.git

### PHP
    "Mobile-Detect": "git@github.com:serbanghita/mobile-detect.git"

### JS - LIB
    "jquery": "git@github.com:jquery/jquery.git"
    "jquery-ui": "git@github.com:jquery/jquery-ui.git"
    "modernizr": "git@github.com:modernizr/modernizr"
    "headjs": "git@github.com:headjs/headjs.git"
    "selectivizr": "git@github.com:keithclark/selectivizr.git"

### JS - PLUGIN
    "jquery.colorbox": "git@github.com:jackmoore/colorbox.git"
	"jquery.TipTip": "git://github.com/drewwilson/TipTip.git"
	"jquery.jScrollPane": "git://github.com/vitch/jScrollPane.git"


