//recepy


function checkscope() { // the parent function
	var innerVar = "local scope var"; // var that can be accesed by the  child func

	function innerFunc() { //define child fn  inside parent fn

		return innerVar;
	};
	return innerFunc; // return it
}

var test = checkscope(); //run parent function and save to a variable
// this variable will hold what the function returns

test; // check what it contains
test() // will run the inner fn



//example 1

var closureAlert = function() {
	var x = 0;
	var alerter = function() {
		alert(++x);
	};
	console.log(alerter)
	return alerter

}


// the value stored in funcStorer is what closureAlert returns which is alerter
//when we refer later tu funcStorer()  it will call alerter
var funcStorer = closureAlert(); // closureAlert is being called only once 

funcStorer(); // when we reference it later here , it will be actually the function alerter
funcStorer(); // if it were to call closureAlert again , we would be resetting X = 0

var funcStorer2 = closureAlert();

funcStorer();



//example 2 
// num1 will stay the same even if we call add5 multiple times


var add = function(num) {
	var num1 = num;

	var addToNum1 = function(num2) {
		return num1 + num2;
	}

	return addToNum1;
}

var add5 = add(5);



add5(2); //7



//exanple 3
//returns an object with 2 functions
function counter() {
	var n = 0;
	return {
		count: function() {
			return ++n;
		},
		reset: function() {
			n = 0;
		}
	};


};

var mycounter = counter();
mycounter.count();



// example 4  StopWatch


var makeStopwatch = function() {
	console.log("initialized");
	var elapsed = 0;
	console.log(elapsed);

	var stopwatch = function() {
		console.log("stopwatch");
		return elapsed;
	};

	var increase = function() {
		elapsed++
	}
	setInterval(increase, 1000);

	return stopwatch;



};

var watch = makeStopwatch ();  

//initialized 
//0

makeStopwatch();

// outputs elapsed time

makeStopwatch();  

// will not 