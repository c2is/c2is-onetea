<?php
$aTarget = "_blank";
$colorProject = "f3b343";
$fontProject = "arial";

// LISTE PAGES
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

// LISTE DESIGN
$dir_design_nom = 'index/design'; // dossier listé (pour lister le répertoir courant : $dir_nom = '.'  --> ('point')
$dir_design = opendir($dir_design_nom) or die('Erreur de listage : le répertoire n\'existe pas'); // on ouvre le contenu du dossier courant
$fichier_design= array(); // on déclare le tableau contenant le nom des fichiers
$dossier_design= array(); // on déclare le tableau contenant le nom des dossiers

while($element_design = readdir($dir_design)) {
    if($element_design != '.' && $element_design != '..' && $element_design != 'index.php' && $element_design != '.idea' && $element_design != '.DS_Store') {
        if (!is_dir($dir_design_nom.'/'.$element_design)) {$fichier_design[] = $element_design;}
        else {$dossier_design[] = $element_design;}
    }
}
closedir($dir_design);

?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel='shortcut icon' type='image/x-icon' href='../favicon.ico' />
    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Index - Relais &amp; Châteaux</title>

    <meta name="description" content="">
    <meta name="author" content="C2iS">
    <style>
		body { margin:0;padding:0;background:#<?php echo $colorProject ?>; font: 13px sans-serif; color:#<?php echo $colorProject ?>; }
        #wrap { margin: 25px auto;padding:20px;width:1000px;background:#fff;border-radius: 0px;}
        ol, ul { padding:10px;}
        li {margin-left:20px;list-style:none;border-bottom: 1px solid #e8e8e8; }
        .git-link { padding-left: 20px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQkYyRUJGOUExNjUxMUUyQjcyMkREMTkyQTFDRTIyRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQkYyRUJGQUExNjUxMUUyQjcyMkREMTkyQTFDRTIyRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNCRjJFQkY3QTE2NTExRTJCNzIyREQxOTJBMUNFMjJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCRjJFQkY4QTE2NTExRTJCNzIyREQxOTJBMUNFMjJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+tN8wTgAAAlhJREFUeNqMU81r1EAUn8xMkk0m2e2uBa+eRBHxoNBu/UL0sIiHvUjBgyJU8e8QpMU/oaIgvVio6KEgovagHi3Uj5N6EKlWYam73UySTbKJv1k221BL8cHbmX0fv/feb140skN0XbfKbvmKzvnVLMsmYDKh65qmPfWkvC99uQb7KF7bvmjEdd0zJdO8jeAphUX+lZ9JkjwA0Fwv6skRABJIpVy5ZpVK80A3ihV2ioqFf6Xd6VwGyCZTRtdxTwnbfpymaZym/SVKmUBgVQVDIyiDIi9bRkyLUnoWnR4Me+GShplFtTL2HAEnoR8223+OUY2O27Y9GQTBr36/37Msaz/qhFJ6bx3HnUbyI1VY+v40r4AwJNaHHTKSESuMwhbQl/O2ozj6mN9R3VKnGhMj36Cc8+vKrtqNk2QBJAVkD0FXz3B8G/JxlALpeO6UUr5Ks3SvfILOfkdx/F4VhIxT/BjFNSD/J3kOUwDfc6sQoq5tr8auUjJLjqHrh4dP3WWu4xzAZXIAx9gJOF6Ch43dksEX4t05RmljaPqsOUIcErZ4gz+foBuYrRnH8SLwF7rd7kqcxGpDa1jtGc71Jtiuq+qKA3Bxh4H5lmmYKM5msCSzcLaxG5dwvvN9fy3Du3LGDRR5iLc7UnjOdRS4ORjYMAy9OlZ9kqXphB8EF2Hykn7yNQzDeMAs18m+Wu01QE8Pk/0gDJudrc6L4ogWqsy7wvGhPwzdOF90wrbq2CLD+QUdXRh9G41Go0gSsS37HLi6hfnuep63mncAsmfByxa6uoddaOUf3F8BBgDNCwatbayalQAAAABJRU5ErkJggg==) no-repeat;
        }
        .spec-link { padding-left: 20px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxODQ1MEY3MzEwQkQxMUU0OEI1MUNFQjQzNjk0MzczRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxODQ1MEY3NDEwQkQxMUU0OEI1MUNFQjQzNjk0MzczRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE4NDUwRjcxMTBCRDExRTQ4QjUxQ0VCNDM2OTQzNzNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE4NDUwRjcyMTBCRDExRTQ4QjUxQ0VCNDM2OTQzNzNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mC0+0wAAAYVJREFUeNq0U7+PAUEUHptLNH6s+NVtgRCV3o+KQqMUWSp6lWIjQaXc7ZQ6iUJLQU38Af4ABXGNRILLutjiu50XtpK7y23uS2bmvTfv+/LmzYyDMXYwh5v9DVeHOYHZgMBVbPCvwm+ystksG4/HLBwOv6zgR6RSKSbLMvP7/S/3L7wPXq8XoVAIj57A5/NZdiQSQb1eh8vlgiiKcDqdz70LCXS7XXBMJhMEg0E8MZvNKLFSqZCfy+VgGAbZy+USiUTigzWbzRsPbLdbStxsNrjf70TmMEuHJElkV6tVpNNp5PN5DIdDFItFnU2nU5J8lsvR6/XI7nQ65GuaRmsmk6FV13W0220EAoEra7Vanzy4WCwQj8ex3+9xOp1QLpdJZLfbWUdKJpMUU1WV/Pl8blAP+v0+BVarFVe1CDzZ4/HgfD6Tz0XX6zWOxyP5jUbjZt1CoVBAqVQiUiwWQ61WgyAIloiiKIhGoxiNRhgMBnQznOt4CLj/9SV+B9uf6c0c73aO8CXAAINdFsggLZgZAAAAAElFTkSuQmCC) no-repeat;
        }
        .trello-link { padding-left: 20px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB90EDAUWGaMaY9UAAAAidEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVAgb24gYSBNYWOHqHdDAAAB1UlEQVQ4y3WTvWpUURSFv33nDMZoBlRIwFiIjZWksBAE8TF8CQtr30IfwNZWfAEhhcTCUsVqEBRUoolJTHLP/rO4d2buJLibc+5Za9+z1mIfefzqU77/dgCA0FX2+0a6E888hyVwd3NC2ZnuEpFsbU6ITGblkXz4foTAf7Gd6S7FauXO9QkvHm1BxpyENDx4ts3Nq6s95gNsxMPn2xy2RjFVVBXCOK4L0urKGNOK1gKu/B1gl1YSM8XUKG5KmHX+BjIhcTPcrVttoMDoz5TiapgaYU74gOQNbh1W1VC1OaQjcDVcjeJuRDiegccig4yYK9DaUgcWapNEr6yYd6TwZQXuDe5OumOqSxbcINxxd0q6E97fZjYgNUgm05/7vH73kdYX6sZNw97RCSJCmY2PuqMDC+aGCBxp8vTND87WSmm6ELu8u8RjFpQIrgvyhdFys4jgprjV7geSoGrowIKWc5ciIoCg9RTT2lkQ4PCk5crFwngki2EZNxy3iswaRQgz6snxfF6SpDSjhi9/Wq49eQkig0cjrG9sIBLdRLanuFuvYlHlYO8X4zJm7fIaMywzyQgOf+8SfbCzxmT5UZV7t9Z5+/kro0bOOl76WppywCO4f/sG/wBYFVeeKyXV/QAAAABJRU5ErkJggg==) no-repeat;
        }
		.pages a {text-decoration:none;display:block; padding:10px 10px 10px 40px; 
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
        .pages a {color:inherit; transition: all 0.3s ease-out;}
        .pages a:hover {background-color:#e8e8e8;color:#<?php echo $colorProject ?>;}
        .pages ol {-webkit-column-count: 3; -moz-column-count: 3; column-count: 3; -webkit-column-gap: 30px; -moz-column-gap: 30px; column-gap: 30px;}
        .pages ol li {margin-left: 0;}
        header {overflow:hidden;padding:30px 130px 20px;text-align: center;}
        header a {color:#<?php echo $colorProject ?>;}
		header img{width: 150px;}
        h1, h2 {display: block; font-family: <?php echo $fontProject ?>; color:#000;}
		section{margin:0px 30px; border-top: 1px solid #e8e8e8; padding: 30px 0;}
        .filters {padding:10px 10px 20px 10px; overflow: hidden;}
        .filters > div {float: left; width: 840px;}
        .filters button {border: none; background: #e8e8e8; padding: 0 15px; outline: none; cursor: pointer; height:25px; line-height: 25px;float: left; margin: 0 5px 5px 0;}
        .filters button:hover, .filters button.active {background: #<?php echo $colorProject ?>; color:#fff;}
        .filters select {float: right;}
        .item {height: auto; margin: 0 1% 2% 1%;}
        [data-col="oneCol"] .item {width: 98%;}
        [data-col="twoCols"] .item {width: 48%;}
        [data-col="threeCols"] .item {width: 31.3%;}
        [data-col="fourCols"] .item {width: 23%;}
        .item img {width: 100%; height: auto; display: block; cursor: url('./index/plus_cursor.png') 25 25, auto;}
        .item div { padding: 10px; display: block;transition: all 0.3s ease-out;background-color:#e8e8e8;text-decoration: none;color: #<?php echo $colorProject ?>; font-weight: bold;}
        .item div img {}
        .item span {display: block; text-align: center; padding: 5px 5px 10px 5px;}
        .item div:hover { background-color:#<?php echo $colorProject ?>; color:#fff;}
    </style>
    <script type="text/javascript" src="index/index-js/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="index/index-js/isotope.pkgd.min.js"></script>
    <script type="text/javascript" src="index/index-js/intense.min.js"></script>
    <script type="text/javascript">
        (function ($, window, document, undefined) {
        'use strict';
        $(window).load(function(){
            $('.design-wrap').isotope({
              itemSelector: '.item'
            });
            var filterValue = '.item';
            // bind filter button click
            $('.filters').on( 'click', 'button', function() {
                $('.btn-filter').removeClass('active');
                $(this).addClass('active');
                filterValue = $( this ).attr('data-filter');
                $('.design-wrap').isotope({ filter: filterValue });
            });

            $('.filters').on( 'change', 'select', function() {
                $('.design-wrap').attr({ 'data-col': $(this).val() });
                $('.design-wrap').isotope({ filter: filterValue });
            });

            //intenseJS
            var element = $('.design-wrap .item img');
            Intense( element );
        })
        // $(function () {
            
        // });

        })(jQuery, window, document);
    </script>
</head>
<body>
<div id="wrap">
    <header>
        <img src="index/logo.png" alt="">
    </header>
    <section class="pages">
        <?php 
		/* list of files */
        if(!empty($fichier)){
            sort($fichier);// pour le tri croissant, rsort() pour le tri décroissant
            echo "<h2>Liste des pages statiques</h2>\n\n";
            echo "\t\t<ol>\n";
            foreach($fichier as $lien) {
                echo "\t\t\t<li><a href=\"$dir_nom/$lien \" target=".$aTarget.">$lien</a></li>\n";
            }
            echo "\t\t</ol>";
        }
        ?>
    </section>
    <section class="design">
        <h2>Liste des maquettes</h2>
        <div class="filters">
            <button class="active btn-filter" data-filter='.item'>Toutes</button>
            <div>
                <?php 
                $categories = array();
                if(!empty($fichier_design)){
                    sort($fichier_design);
                    foreach($fichier_design as $lien_design) {
                        $tabexplode = explode(".",$lien_design);
                        $imgName = $tabexplode[0];
                        $imgNameExplode = explode("_",$imgName);
                        $imgCat = $imgNameExplode[0];
                        array_push($categories, $imgCat);
                    }
                    foreach(array_unique($categories) as $cat) {
                        echo "<button class='btn-filter' data-filter='.$cat'>".ucfirst($cat)."</button>";
                    }
                } 
                ?>
                <select>
                    <option value="oneCol">1 colonne</option>
                    <option value="twoCols" selected>2 colonnes</option>
                    <option value="threeCols">3 colonnes</option>
                    <option value="fourCols">4 colonnes</option>
                </select>
            </div>
        </div>
        <div class="design-wrap" data-col="twoCols">
            <?php 
            if(!empty($fichier_design)){
                sort($fichier_design);
                foreach($fichier_design as $lien_design) {
                    $tabexplode = explode(".",$lien_design);
                    $imgName = $tabexplode[0];
                    $imgNameExplode = explode("_",$imgName);
                    $imgCat = $imgNameExplode[0];
                    echo "\t\t\t<div class='item $imgCat'><div><span>".ucfirst($imgName)."</span><img src=\"$dir_design_nom/$lien_design \"></div></div>\n";
                }
            }
            ?>
        </div>
    </section>
</div>
</body>
