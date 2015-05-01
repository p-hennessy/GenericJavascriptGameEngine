var Tile = function(src, tilemapX, tilemapY, options){
	this.image = new Image();
	this.image.src = src;
	this.size = 16;

	this.settings = $.extend({
		animationFrames: 0,
		variations: 0
	}, options);

	this.animationFrame = 0;
	this.variation = Math.floor(Math.random() * this.settings.variations);
	
	this.tilemap = {
		x: tilemapX * this.size,
		y: tilemapY * this.size
	}

	this.render = function(ctx, x, y, frame){
		ctx.drawImage(
			this.image,
			this.tilemap.x + ((this.animationFrame * this.size) || (this.variation * this.size)),
			this.tilemap.y,
			this.size,
			this.size,
			x, 
			y,
			this.size,
			this.size
		);	

		this.nextFrame();
	}

	this.nextFrame = function(){
		if(this.animationFrame >= this.settings.animationFrames){
			this.animationFrame = 0;	
		}
		else{
			this.animationFrame++;
		}
	}
};

var getMatrix = function(numrows, numcols, initial){
	var arr = [];
	for (var i = 0; i < numrows; ++i){
		var columns = [];
		for (var j = 0; j < numcols; ++j){
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}


var Screen = new function(){

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	var height = canvas.clientHeight;
	var width = canvas.clientWidth;
	var tileSize = 16;
	var scale = 2;

	this.render = function(){


		var tilemap = getMatrix(width / scale / tileSize, height / scale / tileSize, null);


		for( var x = 0; x < width / scale / tileSize; x ++){
			for( var y = 0; y < height / scale / tileSize; y ++){
				tilemap[x][y] = new Tile('res/tileset.png', 0, 0, {variations: 5});
			}
		}


		setInterval(function(){

			for( var x = 0; x < width / scale / tileSize; x++){
				for( var y = 0; y < height / scale / tileSize; y++){
					tilemap[x][y].render(context, x * tileSize, y* tileSize);
				}
			}
		}, 256);



	}


};




Screen.render();


