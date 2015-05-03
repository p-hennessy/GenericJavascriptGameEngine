define(function(){

	var Tile = new Class({
		initialize:function(src, x, y, height, width, options){
			this.spriteSheet = new Image();
			this.spriteSheet.src = src;
			this.height = height || 0;
			this.width = width || 0;

		},
		
		render:function(ctx, x, y){
		
			
		}
	});

	return Tile;


});



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

	this.render = function(ctx, x, y){
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