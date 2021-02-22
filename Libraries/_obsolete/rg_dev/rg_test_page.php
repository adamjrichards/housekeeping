<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Testing Page</title>
	<style>
		body {
			background: grey;
		}
	</style>
</head>

<body>
	<section class="rgcafe default_values" id="the_raingarden_logo">
		<?php
			$the_raingarden_cafe_logo = get_me_a_new_logo( "launch", "#", "" );
			echo $the_raingarden_cafe_logo->my_html;
		?>
		<script>
			function switch_the_logo( the_new_model ) {
				var the_logo = document.getElementById( "the_raingarden_logo" );
				var the_kids = document.getElementsByClassName( "logo" );
				for( var this_one of the_kids ) {
					console.log( this_one.className );
					this_one.className = "logo " + the_new_model + " modified_values";
					console.log( this_one.className );
				}
			}
			switch_the_logo( "small_header" );
		</script>
	</section>	
</body>
</html>