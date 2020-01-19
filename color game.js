var colors = [];
var numberofsquares = 6;
var selectedsquare = selectsquare();
var displaymsg = document.querySelector('#messagedisplay');
var clickedsquare;
var squares = document.querySelectorAll('.square');
var dispresult = document.querySelector('#resultdisplay');
var h1 = document.querySelector('h1');
var newcolors = document.querySelector('#NewColors');
var modes = document.querySelectorAll('.mode');
var modebutton = document.querySelectorAll('.mode');

generateRandomColors(numberofsquares);
displaymsg.textContent = colors[selectedsquare];

function init(){
	for(var i = 0; i < squares.length; i++){		//add colors to each square & add click event to each square
		squares[i].style.background = colors[i];
		squares[i].addEventListener('click', function() {
			clickedsquare = this.style.backgroundColor;
			if( clickedsquare === colors[selectedsquare]){
				h1.style.backgroundColor = 'green';
				dispresult.textContent = 'Correct';
				for(var i=0; i<numberofsquares; i++){
					squares[i].style.backgroundColor = colors[selectedsquare];
				}
				newcolors.textContent = 'Play Again?';
			} else {
				this.style.backgroundColor = document.body.background;
				dispresult.textContent = 'try Again';
			}
		});
	}

	for(var i=0; i<2; i++){							//add click event to modes & display only squares a/c to mode.
		modes[i].addEventListener('click', function(){
			if(dispresult.textContent === 'Correct'){
				dispresult.textContent = '';
				newcolors.textContent = 'New Colors';
				h1.style.backgroundColor = document.body.background;
			}
			modebutton[0].classList.remove('.selectedmode');
			modebutton[1].classList.remove('.selectedmode');
			this.classList.add('.selectedmode');
			if(this.textContent === 'EASY')
				numberofsquares = 3;
			else
				numberofsquares = 6;
			console.log(numberofsquares);
			generateRandomColors(numberofsquares);
			selectedsquare = selectsquare();
			displaymsg.textContent = colors[selectedsquare];
			for(var i=0; i<6; i++){
				if(i < numberofsquares)
					squares[i].style.backgroundColor = colors[i];
				else
					squares[i].style.backgroundColor = document.body.background;
			}
		});
	}

	newcolors.addEventListener('click', function(){
		generateRandomColors(numberofsquares);
		selectedsquare = selectsquare();
		displaymsg.textContent = colors[selectedsquare];
		for(var i=0; i < numberofsquares; i++){
			squares[i].style.backgroundColor = colors[i];
		}
		dispresult.textContent = ' ';
		newcolors.textContent = 'New Colors';
		h1.style.backgroundColor = document.body.background;
	});
}

init();

function selectsquare(){
	return Math.floor(Math.random() * numberofsquares);
}

function generateRandomColors(num){
	for(var i=0; i<num; i++){
		colors[i] = generateColor();
	}
}

function generateColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}