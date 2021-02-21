<?php

namespace rg;
use bw;

exit();
include "bw_functions/bw_dev_utilities.php";
\error_reporting( E_ALL );
\set_include_path( "C:\\Web\\workspaces\\black_willow" );
include "Black_Willow.php";
\line_out( __FILE__, __LINE__, "loaded" );
$GLOBALS[ "MY_RAINGARDEN" ] = new \bw\Black_Willow( "Raingarden", "MY_RAINGARDEN", "rg", "raingarden", "C:\\Web\\workspaces\\raingarden\\rg_json\\rg_default_init.json", "random"  );
$GLOBALS[ "MY_RAINGARDEN" ]->kickstart_it();
\line_out( __FILE__, __LINE__, "initialized" );