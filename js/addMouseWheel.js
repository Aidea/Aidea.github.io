/**
 * 鼠标滚轮事件模块
 * @authors Your Name (you@example.org)
 * @date    2014-12-14 01:51:18
 * @version $Id$
 */

define(function(require,exports,module){
	exports.addMouseWheel=function(obj,fn){
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
			obj.addEventListener('DOMMouseScroll',fnWheel,false);
		}else{
			obj.onmousewheel=fnWheel;
		}
		
		function fnWheel(ev){
			var oEvent=ev||event;
			var down=true;
			down=oEvent.wheelDelta?(oEvent.wheelDelta<0):(oEvent.detail>0);
			fn&&fn(down);
			oEvent.preventDefault&&oEvent.preventDefault();
			return false;
		}
	}
})