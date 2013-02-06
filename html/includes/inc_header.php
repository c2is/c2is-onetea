<?php /* Functions examples: isAjax - isHomePage
	include('functions.php');
*/ ?>
<!doctype html>
<html class="js-false" lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo $title ?></title>

    <meta name="description" content="">
    <meta name="author" content="">

	<?php /* Examples:
		[cmd] To compile/minify: lessc css/screen.less css/screen.css -x
		[cmd] To compile/minify with Yui: lessc css/screen.less css/screen.css --yui-compress 
	*/ ?>
    <link rel="stylesheet" href="../css/screen.css">

	<?php /* Examples:
		<script src="PATH_to_HEADJS/Modernizr_component"></script>
		<script>
			// dsettingsGlobal ala Drupal
			var settingsGlobal = settingsGlobal|| {
				sTemplatePath : '../' // chemin du template en absolue
			}
		</script>
	*/ ?>
</head>
<body>