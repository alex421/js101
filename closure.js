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


//