#Callback List
Collect your functions and: add, run and clear the list. 

##Quick Use

	var _myCallbacks = new CallbackList();

	_myCallbacks.add(function(){
		console.log("Hello");
	});

	_myCallbacks.add(function(){
		console.log("World");
	})

	_myCallbacks.run();
	-> Hello
	-> World

	_myCallbacks.clear();
	_myCallbacks.run();
	-> 

## Parameters and Context

You can pass the run function 2 Arguments:
	
	_myCallbacks.run(param, context);

This will be called with

	yourFunc.call(context, param);