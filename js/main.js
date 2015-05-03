define(['lib/class', 'lib/jquery'], function() {
    require(["src/game"], function(Game){
		
		var game = new Game();
		game.start();
		
	
	});
});