define(function(){

	var Tile = new Class({
		initialize:function(src, x, y, options){
			this.spriteSheet = new Image();
			this.spriteSheet.src = src;
			this.x = x;
			this.y = y;
			
			this.height = 16;
			this.width = 16;

			this.options = $.extend({
				variation: 0,
				solid: false
			}, options);

		},

		render:function(ctx, dx, dy){
			ctx.drawImage(
				this.spriteSheet,
				this.x * this.width,
				this.y * this.height,
				this.width,
				this.height,
				dx * this.width, 
				dy * this.height,
				this.width,
				this.height
			);	
			

		}
	});

	return Tile;


});