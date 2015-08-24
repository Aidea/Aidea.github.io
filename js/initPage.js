/**
 * 载入动画
 * @authors Your Name (you@example.org)
 * @date    2014-12-14 02:14:43
 * @version $Id$
 */

define(function(require,exports,module){
	var move=require('move').move;
	exports.initPage=function(){   
	    var objLoading = document.getElementById("LoadingBar");
	    var objLoadLogo = document.getElementById("LoadingLogo");
		var oBox=document.getElementById('box');
		var oLayer=document.getElementById('layer');
			var oCover=document.getElementById('cover');
	    if (objLoading != null){   
	    	move(objLoading,{opacity:0},{time:500,end:function(){
	    		objLoadLogo.children[0].style.display='block';
	    		move(objLoadLogo.children[0],{top:-280},{time:1000,end:function(){
	    			move(oBox,{left:-200},{time:500,end:function(){
					oCover.style.display='none';
				}});
	    		}})
	    		move(oLayer,{opacity:0},{time:500,end:function(){
					oLayer.style.display='none';
				}});
	    		objLoading.style.display = "none";
	    	}})
	    }   
	}
});