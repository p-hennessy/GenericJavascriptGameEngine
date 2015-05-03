define(['lib/class', 'lib/jquery', 'lib/globalDefinitions'], function() {
    require(["src/game"], function(Game){
		var game = new Game();
		game.start();
	});
});