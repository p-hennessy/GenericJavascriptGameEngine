define(['jquery', 'src/tile', 'src/renderer'], function($, Tile, Renderer){

	var Game = new Class({
		initialize: function(){
			this.running = false;
			this.canvas = document.getElementById('canvas');
			this.renderer = new Renderer(this.canvas);
		},

		tick: function() {
			this.renderer.clearCanvas();
			this.renderer.drawTerrainMap();

		},

		start: function() {
			this.running = true;
			var self = this;

			var gameLoop = setInterval(function(){
				self.tick();

				if(!self.running){
					clearInterval(gameLoop);	
				}

			}, 1000 / 60);


		},

		stop: function() {

		},


	});
	return Game;

});

