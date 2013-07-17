})(function(name, object){
	if(typeof define === 'function' && define.amd){
		define(function(){
			return object;
		});
	}else if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = object;
		return;
	}else{
		window[name] = object;
	}
});