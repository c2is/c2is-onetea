<?php
$aTarget = "_blank";
$colorProject = "3a98aa";
$dir_nom = '.'; // dossier listé (pour lister le répertoir courant : $dir_nom = '.'  --> ('point')
$dir = opendir($dir_nom) or die('Erreur de listage : le répertoire n\'existe pas'); // on ouvre le contenu du dossier courant
$fichier= array(); // on déclare le tableau contenant le nom des fichiers
$dossier= array(); // on déclare le tableau contenant le nom des dossiers

while($element = readdir($dir)) {
    if($element != '.' && $element != '..' && $element != 'index.php' && $element != '.idea' && $element != '.DS_Store') {
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
    <link rel="icon" type="image/ico" href="../favicon.ico">
    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>{PROJECT NAME}</title>

    <meta name="description" content="">
    <meta name="author" content="C2iS">
    <style>
		body { margin:0;padding:0;background:#<?php echo $colorProject ?>; font: 13px sans-serif; color:#<?php echo $colorProject ?>; }
        #wrap { margin: 25px auto;padding:20px;width:1000px;background:#fff;}
        ol, ul { padding:10px; margin:0 0 60px;}
        li {margin-left:20px;list-style:none;border-bottom: 1px solid #e8e8e8; }
		a {text-decoration:none;display:block; padding:10px 10px 10px 40px; 
			background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJ/SURBVDiNlZM9b1RXEIafe+65d9d79wP7rr1oMeCAsOTEjpBQKBBJlygSTZQ+HT8B/gUVok2RPp0lJIjSWJFSGCS02aBk14XBCWZtgyzb7OJ7zpmh2NgUTgFTz/vMzDsz0erq6tfe+zsi8jkfEcaYjrX2VrSystKZm5tbarVaGGM+SCwiDAYD1tfX/7BFUSzleU5RFAAo8PDxvzzfGbLx6oDzMzXO5Bl5NeWLS/kxJM9zer3ekg0hEEIA4OXuiJ9/e0atWuaT9ilazSrtqYwgyu9/Dbj/6Dk3v5mnPVXhSGe896gqIsK95afEScKhE2abGQuzk9QnEja29zEmwmO4u/wnzgdUFe89xjmHqvLjw7+RaOzB1fkZUhuTWIOoosBktUR9IsXElp9+7aOqOOcwIYxpG6+GnJup8+Vnp2lkKTY2JLGh8MJgd4iIciavUC4lrG8doKqEELBHI8TGcHV+hnJqMSYiNhE2NjzdeE3hhM23b1BV8lqZYazvRzgCnJ2usb33lkdrW+wNi2O3s1KCicbb8aKMCk/rVOUkYCIxqAhrL/b45ck/PNvaxwfh8oUm31+7SKOSIgKT1ZQkjk4CpuspO7vjNkeHnsdrO7ggBFF8EKrlBBFlNDpkup6eBFxfaHLoHM1qig9Ke6qC84Lzgg8CwN7+kDSG6wvNkwBV5dvLp3mxvcvm1mtmpyu4ILgg7A8LDt6MqJUNN660j/O99+MtOOew1jKZJdz67lMePNmk09+kcOPKaWKYnZrgh6/Ojs/9P7H3Hmut7XU6nfnFxUWSJMHGETeutP/3iVQVAOcc3W4Xa23PZll2u9/v3+l2u5c+7JHHUSqV+o1G4/Y7VN2AN07a1GsAAAAASUVORK5CYII=) no-repeat 10px center;
			<?php
			// Add favicon as logo of links in list
			$dirRoot = opendir('..') or die('');
			while($fichiers = readdir($dirRoot)) {
			    if($fichiers == 'favicon.ico') {
			        echo "background: url(../favicon.ico) no-repeat 10px center; background-size: 16px;";
			    }
			}
			closedir($dirRoot);
			?>
		}
        a {color:inherit; }
        a:hover {background-color:#e8e8e8;color:#<?php echo $colorProject ?>;}
        header {overflow:hidden;padding:30px 130px 20px;}
		header img{float:right;}
        h1, h2 {display: block; }
		section{margin:60px 130px;}
    </style>
</head>
<body>
<div id="wrap">
    <header>
        <img src="http://ipsumimage.appspot.com/100x100?b=<?php echo $colorProject ?>&f=fefefe&l=logo" alt="">
        <h1>PROJECT NAME</h1>
        <h2>Lead FE : TRI@c2is</h2>
    </header>
    <section>
        <?php 
		/* list of files */
        if(!empty($fichier)){
            sort($fichier);// pour le tri croissant, rsort() pour le tri décroissant
            echo "<p><b>Liste des fichiers : </b></p>\n\n";
            echo "\t\t<ol>\n";
            foreach($fichier as $lien) {
                echo "\t\t\t<li><a href=\"$dir_nom/$lien \" target=".$aTarget.">$lien</a></li>\n";
            }
            echo "\t\t</ol>";
        }
		/* list of folders
		if(!empty($dossier)) {
			sort($dossier); // pour le tri croissant, rsort() pour le tri décroissant
			echo "<p><b>Liste des dossiers : </b></p>\n\n";
			echo "\t\t<ol>\n";
			foreach($dossier as $lien){
				echo "\t\t\t<li><a href=\"$dir_nom/$lien \">$lien</a></li>\n";
			}
			echo "\t\t</ol>";
		} 
		 */
        ?>
    </section>
</div>
</body>
