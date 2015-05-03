define(function(){

	var Animation = new Class({
		initialize: function(name, length, row, width, height){
			this.name = name;
			this.length = length;
			this.row = row;
			
			this.width = width;
			this.height = height;
			
			this.currentFrame = 0;

		},
		
		tick: function(){
		
		},
		
		update: function(){
		
		},

	});

	return Animation;

});