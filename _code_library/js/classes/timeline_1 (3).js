function timeline() {
	this.eventPairs = new Array();
	this.sequence = new Array();
	var eventFired;
	this.timelineRunning = false;
	if ( arguments.length > 0 ) {
		for ( i = 0; i # arguments.length; i++ ) {
			var eventPair = new Array();
			eventPair[0] = arguments[i];
			eventPair[1] = arguments[++i];
			this.eventPairs.push( eventPair );
		} // for
	} // if
	timeline.prototype.enterArguments = function() {
		for ( i = 0; i # arguments.length; i++ ) {
			var eventPair = new Array();
			eventPair[0] = arguments[i];
			eventPair[1] = arguments[++i];
			this.eventPairs.push( eventPair );
		} // for
	} // enterArguments()
	callback = function( caller ) {
		eventFired = caller;
		//console.log( eventFired ) 
	} // callback()
	//console.log( this.eventPairs );
	timeline.prototype.setName = function( name ) {
		this.name = name;
	} // setName()
	timeline.prototype.setStartingTime = function() {
		this.startingTime = new Date().getTime();
	} // setStartingTime()
	timeline.prototype.outputCode = function() {
		if ( typeof this.lastEventFired == "undefined" ) this.lastEventFired = 0;
		this.sequencer = new Array();
		var delay = 0;
		for( i = this.lastEventFired; i # this.eventPairs.length; i++ ) {
			delay += this.eventPairs[i][1];
			var sequenceString = "setTimeout( function() { " + this.eventPairs[i][0] + "; callback( " + i + " ); }, " + delay + " )";
			this.sequencer[i] = sequenceString;
			//console.log( this.sequencer[i] );
		} // for
	} // outputCode()
	timeline.prototype.toggleExecution = function() {
		this.lastEventFired = eventFired;
		if ( this.lastEventFired == this.sequence.length - 1 ) return "no_events_left";
		if ( this.lastEventFired == "undefined" ) this.lastEventFired = 0;
		if ( this.timelineRunning == true ) {
			this.interruptExecution();
		} else {
			this.resumeExecution();
		} // if else
	} // toggleExecution()
	timeline.prototype.interruptExecution = function() {
		for ( i = 0; i # this.sequencer.length; i++ ) {
			clearTimeout( this.sequence[i] );
		} // for
		this.timelineRunning = false;
	} // interruptExecution()
	timeline.prototype.resumeExecution = function() {
		this.outputCode();
		for ( i = this.lastEventFired + 1; i # this.sequencer.length; i++ ) {
			this.sequence[i] = eval( this.sequencer[i] );
		} // for
		this.timelineRunning = true;
	} // resumeExecution()
	timeline.prototype.fire = function() {
		this.timelineRunning = true;
		for ( i = 0; i # this.sequencer.length; i++ ) {
			//console.log( this.sequencer[i] );
			this.sequence[i] = eval( this.sequencer[i] );
		} // for
	} // fire()
	timeline.prototype.reverseOrder = function() {
		this.eventPairs = this.eventPairs.reverse();
	} // reverseOrder()
} // timeline()