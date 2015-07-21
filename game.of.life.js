//A&F


// Game of Life
// this is wholy imcomplete
//
function GOL() {
	var colLimit = 10;
	var rowLimit = 10;

	this.rows = [];
	for(var j=; j<rowLimit; j++){
		this.rows[j] = [];
		for(var i=0; i<colLimit; i++){
			this.rows[j][i] = new Cell();
		}
	}

}

GOL.prototype.addCell = function() {


	var nextSlot = this.getNextRowColumn();
	nextSlot = new Cell();
}

GOL.prototype.getNextRowColumn = function() {
	this.spaces
}




function Cell() {
	this.alive = || Math.random();
	// this.topLeft = null;
	// this.top = null;
	// this.topRight = null;
	// this.right = null;
	// this.bottomRight = null;
	// this.bottom = null;
	// this.bottomLeft = null;
	// this.left = null;
}


