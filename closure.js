var closureAlert = function() {
var x =0;

    var alerter = function () {

   		 alert(++x);
    };
console.log(alerter)

return alerter

}

var funcStorer = closureAlert();

funcStorer();
funcStorer();

var funcStorer2 = closureAlert ();

funcStorer();