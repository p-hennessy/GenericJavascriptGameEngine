define(['jquery', 'src/tile', 'src/renderer'], function($, Tile, Renderer){

	var Game = new Class({
		initialize: function(){
			this.running = false;
			this.canvas = document.getElementById('canvas');
			this.renderer = new Renderer(this.canvas);
			
			this.currentTime = Date.now();
		},

		tick: function() {
			this.currentTime = Date.now();
						
			if(!this.running)
				return;
			
			this.renderer.clearCanvas();
			this.renderer.drawTerrainMap();
			this.renderer.drawPlayer();
		
			requestAnimationFrame(this.tick.bind(this));

		},

		start: function() {
			this.running = true;
			this.tick();
		},

		stop: function() {
			this.running = false;
		},


	});
	return Game;

});

