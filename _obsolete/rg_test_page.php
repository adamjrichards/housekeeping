 <!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Testing Page</title>
	</head>

	<body id="the_body">
		
		
		<div id="the_test_box" class="test box" onmouseenter="add_my_listeners(this)">test box</div>
		<output id="the_output" class="this_class">
		</output>

		<script>
			function yell( stuff ) {
				document.getElementById( "the_output" ).innerHTML = "<p>" + stuff + "</p>";
			}
			/*
			import { add_my_listeners } from './js/add_my_listeners.mjs';
			const my_worker = new Worker( "./js/External_Timer.worker.js" );
			my_worker.onmessage = function( e ) {
				yell( e.data );
			}
			*/
			console.log( this );
			function add_my_listeners( me ) {
				var my_listeners = me.className.replace( " ", "_" ) + "_listeners";
				console.log( my_listeners );			
			}
			
		</script>
	</body>
</html>   