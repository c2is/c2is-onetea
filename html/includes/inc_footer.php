	<?php /* Examples:
		1- [cmd] If jquery UI core + mods, so combine/minify to js/jqui.min.js:
		uglifyjs components/jquery-ui/ui/jquery.ui.core.js components/jquery-ui/ui/jquery.ui.menu.js components/jquery-ui/ui/jquery.ui.mouse.js -o js/jqui.min.js
		
		2- [cmd] And combine/minify jqui.min.js & all others JS components to js/all.min.js:
		uglifyjs components/jquery/jquery.js components/jquery.colorbox/jquery.colorbox.js jqui.min.js -o js/all.min.js 
	*/ ?>
	
	<script src="../js/all.min.js"></script>
	<script src="../js/front.js"></script>
	<!-- Prompt IE 6 users to install Chrome Frame -->
	<!--[if lt IE 7 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
	<![endif]-->
</body>
</html>