})(function(name, object){
	if(typeof define === 'function' && define.amd){
		define(function(){
			return object;
		});
	}else if(typeof exports === 'object'){
		exports[name] = object;
	}else{
		window[name] = object;
	}
});