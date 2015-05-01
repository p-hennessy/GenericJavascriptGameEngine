var Tile = function(src, tilemapX, tilemapY, animateLength){
	this.image = new Image();
	this.image.src = src;
	this.size = 16;
	this.animateLength = animateLength - 1;

	this.frame = 0;

	this.tilemap = {
		x: tilemapX * this.size,
		y: tilemapY * this.size
	}

	this.render = function(ctx, x, y, frame){
		ctx.drawImage(
			this.image,
			this.tilemap.x + (this.frame * this.size),
			this.tilemap.y,
			this.size,
			this.size,
			x, 
			y,
			this.size,
			this.size
		);	
	}
	this.nextFrame = function(){
		if(this.frame >= this.animateLength){
			this.frame = 0;	
		}
		else{
			this.frame++;
		}
	}
};

var Screen = new function(){

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	var height = canvas.clientHeight;
	var width = canvas.clientWidth;
	var tileSize = 16;
	var scale = 2;

	this.render = function(){

		var grass = new Tile('res/tileset.png', 0, 0, 0);
		var dirt = new Tile('res/tileset.png', 1, 0, 0);
		var water = new Tile('res/tileset.png', 0, 1, 8);

		setInterval(function(){

			for( var x = 0; x < width / scale; x += tileSize){
				for( var y = 0; y < height / scale; y += tileSize){
					water.render(context, x, y);
				}
			}
			
			water.nextFrame();


		}, 168);



	}


};




Screen.render();


