/**
 * 获取非行间样式
 * @authors Your Name (you@example.org)
 * @date    2014-12-13 16:08:29
 * @version $Id$
 */

define(function(require,exports,module){
	exports.getStyle=function(obj,name){
		return (obj.currentStyle || getComputedStyle(obj,false))[name];
	}
});