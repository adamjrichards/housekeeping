class DOM_Menu_Button extends DOM_Button { 	
	constructor( me, the_parent_menu ) {
		super( me, the_parent_menu );
		this.me.my_parent_menu = the_parent_menu;
	}
}