window.onload = function(){
	var boundaries = document.getElementsByClassName("boundary");
	var end = document.getElementById("end");
	var start = document.getElementById("start");
 	//Exercise 2
 	var gameOver = function() {
 		for (var i = 0; i < boundaries.length; i++) {
 			boundaries[i].className += " youlose";
 		}
 	}

 	var restart = function(){
 		for (var i = 0; i < boundaries.length; i++) {
 			boundaries[i].className = "boundary";
 		}
 	}
 	for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].onmouseover = function(){
			//this.className += " youlose";
			gameOver();
		}
	}
	//Exercise 3
	end.onmouseover = function(){
		if (!(boundaries[0].classList.contains("youlose"))){
			alert("YOU WIN!");
		}
	}

	//exercise 4
	start.onmouseover = function(){
		restart();
	}
}

