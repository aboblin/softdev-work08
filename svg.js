var svg_area = document.getElementById('svg');
var name_space = "http://www.w3.org/2000/svg";

var clear_button = document.getElementById('clear');
var expand_button = document.getElementById('expand');
var bounce_button = document.getElementById('bounce');
var stop_button = document.getElementById('stop');

var requestID;

var animate_expand = function(){

  stopAnimate();

	var expand = true;
	var rad = 1;

	var expand_question = function(e){
		if (rad >= svg_area.getAttribute('height')/2 || rad >= svg_area.getAttribute('width')/2 || rad <= 0){
			expand = !expand;
		}
	};

	var expand_dong = function(){

    clear_screen();

		if (expand) {
		rad += 1;
		}

		else if (!expand){
		rad -= 1;
		}

    circ = make_circle(svg_area.getAttribute('width')/2, svg_area.getAttribute('height')/2, rad, "blue");
    svg_area.appendChild( circ );
    expand_question();
  }
    requestID = setInterval(expand_dong, 10);
}

var animate_bounce = function(){

	stopAnimate();

	var x = (svg_area.getAttribute('width')/2) + 10;
	var y = svg_area.getAttribute('height')/2;
	var deltaX = 2;
	var deltaY = 2;


	var change_direction = function(){
		if (x + 20 == svg_area.getAttribute('width') || x - 20 == 0){
			deltaX = -1 * deltaX;
		}
		if (y + 20 == svg_area.getAttribute('height') || y - 20 == 0){
			deltaY = -1 * deltaY;
		}
	}

	var bouncey_boy = function(){

		clear_screen();

		circ = make_circle(x, y, 20, "blue");
    svg_area.appendChild( circ );

		x += deltaX;
		y += deltaY;

		change_direction();

	};

	requestID = setInterval(bouncey_boy, 10);

}


var make_circle = function(x, y, r, fill) {

  var circ = document.createElementNS(name_space, "circle");
  circ.setAttribute("cx", x);
  circ.setAttribute("cy", y);
  circ.setAttribute("r", r);
  circ.setAttribute("fill", fill);
  return circ;
}

var clear_screen = function (e) {
  while (svg_area.lastChild) {
    svg.removeChild(svg.lastChild);
  }
}

var stopAnimate = function(){
	clearInterval(requestID);
}

stop_button.addEventListener('click', stopAnimate);
expand_button.addEventListener('click', animate_expand);
bounce_button.addEventListener('click', animate_bounce );
clear_button.addEventListener("click", clear_screen);
