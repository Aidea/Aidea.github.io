/**
 * ready加载
 * @authors Your Name (you@example.org)
 * @date    2014-12-14 02:00:23
 * @version $Id$
 */

define(function(require,exports,module){
	exports.addReady=function(fn){
		if(document.addEventListener){
			document.addEventListener('DOMContentLoaded',fn,false);
		}else{
			document.onreadystatechange=function(){
				if(document.readyState=='complete'){
					fn();
				}
			};
		}
	}
});