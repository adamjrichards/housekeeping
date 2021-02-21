SVGElement.prototype.getElementDimensions = function() {
	this.cWidth = this.getBoundingClientRect().width;
	this.cHeight = this.getBoundingClientRect().height;
	this.cLeft = this.getBoundingClientRect().left;
	this.cTop = this.getBoundingClientRect().top;
	this.cRight = this.getBoundingClientRect().right;
	this.cBottom = this.getBoundingClientRect().bottom;
	//console.log( this.cWidth + ", " + this.cHeight + ", " + this.cLeft + ", " + this.cTop + ", " + this.cRight + ", " + this.cBottom );
} // getElementDimensions()