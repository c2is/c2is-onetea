<?php
$dir_nom = '.'; // dossier listé (pour lister le répertoir courant : $dir_nom = '.'  --> ('point')
$dir = opendir($dir_nom) or die('Erreur de listage : le répertoire n\'existe pas'); // on ouvre le contenu du dossier courant
$fichier= array(); // on déclare le tableau contenant le nom des fichiers
$dossier= array(); // on déclare le tableau contenant le nom des dossiers

while($element = readdir($dir)) {
    if($element != '.' && $element != '..' && $element != 'index.php' && $element != '.idea') {
        if (!is_dir($dir_nom.'/'.$element)) {$fichier[] = $element;}
        else {$dossier[] = $element;}
    }
}

closedir($dir);
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>YOUR PROJECT HERE</title>

    <meta name="description" content="">
    <meta name="author" content="C2iS">

    <style>

        body { background:#fff; font: 13px Arial, Helvetica, sans-serif; color:#000; }
        #wrap { margin: 30px auto; width:1000px }
        ol, ul { border: 1px solid #000; background:#dedede; padding:10px; margin:0 0 40px 0;}
        li {margin-left:20px;}
        a {color:inherit; }
        a:hover {text-decoration:none;}
        header {margin-bottom:30px;}
        h1 {display: inline-block; vertical-align: 0; padding-left:30px;}
    </style>
</head>
<body>
<div id="wrap">
    <header>
        <img src="../images/common/pict/logo.png" alt="YOUR PROJECT HERE">
        <h1>YOUR PROJECT HERE</h1>
    </header>
    <section>
        <?php if(!empty($dossier)) {
        sort($dossier); // pour le tri croissant, rsort() pour le tri décroissant
        echo "<p>Liste des dossiers : </p>\n\n";
        echo "\t\t<ol>\n";
        foreach($dossier as $lien){
            echo "\t\t\t<li><a href=\"$dir_nom/$lien \">$lien</a></li>\n";
        }
        echo "\t\t</ol>";
    }

        if(!empty($fichier)){
            sort($fichier);// pour le tri croissant, rsort() pour le tri décroissant
            echo "<p>Liste des fichiers : </p>\n\n";
            echo "\t\t<ol>\n";
            foreach($fichier as $lien) {
                echo "\t\t\t<li><a href=\"$dir_nom/$lien \" target=\"_blank\">$lien</a></li>\n";
            }
            echo "\t\t</ol>";
        }
        ?>
    </section>
</div>
</body>