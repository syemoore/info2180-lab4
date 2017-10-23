window.onload = function(){
	var boundaries = document.getElementsByClassName("boundary");
	var end = document.getElementById("end");
	var start = document.getElementById("start");
	var status = document.getElementById("status");
	var maze= document.getElementById("maze");
 	//Exercise 2
 	var gameOver = function() {
 		for (var i = 0; i < boundaries.length; i++) {
 			boundaries[i].className += " youlose";
 		}
 		status.innerText = "You LOSE!"; //Exercise 5
 	}

 	var restart = function(){
 		for (var i = 0; i < boundaries.length; i++) {
 			boundaries[i].className = "boundary";
 		}
 		status.innerText = "Good Luck"; //Exericse 5
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
			status.innerText = "You WIN!"; //Exercise 5
		}
	}

	//exercise 4
	start.onmouseover = function(){
		restart();
	}

	//Exercise 6
	maze.onmouseleave = function(){
		gameOver();
	}
	//Accident
}

