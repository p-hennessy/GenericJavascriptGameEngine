define(function(){

	var Sprite = new Class({
		initialize: function(src, height, width){
			this.height = height;
			this.width = width;
			this.scale;

			this.image = new Image();
			this.image.src = src;
		},
		
		load: function(){
			
		}
	});

	return Sprite;

});