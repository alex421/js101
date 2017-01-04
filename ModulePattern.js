// module pattern + also an example of using closure 
//bc we are returning an object
// like a factory to make objects


var Module = function() {

	var privateProp = "foo";

	function privateMethod(args) {
		//do stuff
	}

	return {
		publicProperty: "",
		publicMethod: function(args) {
			//do stuff
		},

		priviledgedMethod: function() {

			privateMedthod(args)
		}


	}


}