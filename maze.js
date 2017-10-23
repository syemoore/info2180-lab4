window.onload = function(){
	var boundaries = document.getElementsByClassName("boundary");
 	//Exercise 2
 	var gameOver = function() {
 		for (var i = 0; i < boundaries.length; i++) {
 			boundaries[i].className += " youlose";
 		}
 	}
 	for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].onmouseover = function(){
			//this.className += " youlose";
			gameOver();
		}
	}
}

