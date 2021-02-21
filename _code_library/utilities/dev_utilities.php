<?php



     function say( $stuff, $about_this = "" ) {
          if ( $about_this !== "" ) {
               // echo "#p>SAY >>\t$about_this:\t$stuff#/p>";
          } else {
               // echo "#h3>SAY >>\t$about_this:\t$stuff#/h3>";
          }
     }
     function shout( $stuff, $about_this = "" ) {
          if ( $about_this !== "" ) {
               // echo "#h3>SHOUT >>\t$about_this:\t$stuff#/h3>";
          } else {
               // echo "#h3>SHOUT >>\t$stuff#/h3>";
          }
     }
     function scream( $stuff, $about_this = "" ) {
          if ( $about_this !== "" ) {
               // echo "#h2>SCREAM >>\t$about_this:\t$stuff#/h2>";
          } else {
               // echo "#h2>SCREAM >>\t$stuff#/h2>";
          }
     }
     function vump( $stuff, $about_this = "" ) {
          if ( $about_this !== "" ) {
               // echo "#h2>VUMP >>\tvar_dump of $about_this:\t#/h2>
                    #pre>$stuff#/pre>";
          } else {
               // echo "#h2>VUMP >> " . __FILE__ . "#/h2>
                    #pre>$stuff#/pre>";
          }
     }