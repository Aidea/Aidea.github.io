/**
 * 主体
 * @authors Aidea (aidea.me@gmail.com)
 * @date    2014-12-13 21:46:26
 * @version 1.0
 */

define(function(require,exports,module){
	var move=require('move').move;
	var addMouseWheel=require('addMouseWheel').addMouseWheel;
	var initPage=require('initPage').initPage;
	exports.comm=function(){
		initPage();
		var objLoading = document.getElementById("LoadingBar");
		var oScreen = document.getElementById('screen');
		var oScreen2 = document.getElementById('screen2');
		var oBox=document.getElementById('box');
		var oBtn=document.getElementById('btn');
		var oNavi=document.getElementById('navi');
		var oSign=document.getElementById('sign');
		var aSign=oSign.children;
		var oMoveSpan=oBtn.getElementsByTagName('span')[0];
		var oP=oBtn.getElementsByTagName('p')[0];
		var oLayer=document.getElementById('layer');
		var aLi=oNavi.children[1].getElementsByTagName('li');
		var oBg=document.getElementById('bg');
		var oHome=document.getElementById('home');
		var oLogo=document.getElementById('logo');
		var oCover=document.getElementById('cover');
		var clientW=document.documentElement.clientWidth;
		var clientH=document.documentElement.clientHeight;
		var oMore=document.getElementById('more');
		var aMoreLi=oMore.getElementsByTagName('li');
		/*var oP1=document.getElementById('p1');
		var oP2=document.getElementById('p2');
		var oSp0=document.getElementById('sp0');
		var oSpb1=document.getElementById('spb1');
		var oSpb2=document.getElementById('spb2');
		var oSpb3=document.getElementById('spb3');
		var oSpb4=document.getElementById('spb4');
		var oWait=document.getElementById('wait');*/
		var oLeft=document.getElementById('ileft');
		var oRight=document.getElementById('iright');
		var oTitle=document.getElementById('title');
   		var objLoadLogo = document.getElementById("LoadingLogo");
   		var oSkill=document.getElementById('skill');
   		var oProject=document.getElementById('project');
   		var oBottomMenu=document.getElementById('bottom_menu');
   		var aProjectLi=oProject.getElementsByTagName('li');
   		var oSeeMore=document.getElementById('see_more');
   		var oShowWork=document.getElementById('show_work');
   		var oResume=document.getElementById('resume');
   		var oClock=document.getElementById('clock');
		var oHour=document.querySelector('#clock .hour');
		var oMin=document.querySelector('#clock .min');
		var oSec=document.querySelector('#clock .sec');
   		var disX=0;
   		var disY=0;
   		var aScreen=oHome.children;
   		var aStyle=[];
		var iNow=0;
		var bSign=true;
		var aPos=[];
//页面载入定位
		for (var i = 1; i < aScreen.length; i++) {
			aScreen[i].style.top=-clientH+'px';
		};
		oMore.style.left=oBox.offsetWidth+'px';
		window.onresize=function(){
			if (oMore.style.left=='0px') {
				oMore.style.left=0;
			}else{
				oMore.style.left=oBox.offsetWidth+'px';
			}
			for (var i = 1; i < aScreen.length; i++) {
				aScreen[i].style.top=-oBox.offsetHeight+'px';
			};
			aScreen[iNow].style.top=0;
		};
//鼠标滚动事件
		addMouseWheel(document,function(down){
			if (oLayer.style.opacity==0&&bSign&&oShowWork.style.opacity==0&&oMore.style.opacity==0) {
				bSign=false;
				if(down){
					move(aScreen[iNow],{top:-clientH,opacity:0},{time:1000});
					iNow++;
					if (iNow>=4) {
						move(oBottomMenu,{height:200});
						move(oBottomMenu.children[2],{opacity:1});
						oBottomMenu.children[1].style.display='none';
						iNow=3;
					}
				}else{
					if (oBottomMenu.children[1].style.display=='none') {
						move(oBottomMenu,{height:40},{end:function(){
							bSign=true;
						}});
						oBottomMenu.children[1].style.display='block';
					}else{
						move(aScreen[iNow],{top:-clientH,opacity:0},{time:1000});
						iNow--;
						if (iNow<=0) {iNow=0};
						move(oBottomMenu.children[2],{opacity:0});
						move(aScreen[iNow],{top:0,opacity:1},{time:1000,end:function(){
							bSign=true;
						}});
					}
				}
				move(aScreen[iNow],{top:0,opacity:1},{time:1000,end:function(){
					bSign=true;
				}});
				move(oSign,{opacity:1},{end:function(){
					move(oSign,{opacity:0.3},{time:1500})
				}})
				move(oTitle.children[0],{top:-54*iNow},{time:300});
				for (var i = 0; i < oSign.children.length-1; i++) {
					oSign.children[i].className='';
				};
				oSign.children[iNow].className='active';
			}
		});
//第一页
	//首页时钟
		function tick(){
			var oDate=new Date();
			oHour.style.WebkitTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
			oMin.style.WebkitTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
			oSec.style.WebkitTransform='rotate('+oDate.getSeconds()*6+'deg)';
		}
		setInterval(tick, 1000);
		tick();
		for(var i=0;i<60;i++){
			var oSpan=document.createElement('span');
			if(i%5){
				oSpan.className='scaler';
			}else{
				oSpan.className='big_scaler';
				if(i==0){
					oSpan.innerHTML='<em>'+12+'</em>';
				}else{
					oSpan.innerHTML='<em>'+i/5+'<\/em>';
				}
				oSpan.children[0].style.WebkitTransform='rotate('+-i*6+'deg)';
			}
			oClock.insertBefore(oSpan,oClock.children[0]);
			oSpan.style.WebkitTransform='rotate('+i*6+'deg)';
		}
		oClock.onmousedown=function(ev){
			clearInterval(this.timer)
			var oEvent=ev||event;
			var aPos1={
				top:oClock.offsetTop,
				left:oClock.offsetLeft
			}
			disX=oEvent.clientX-oClock.offsetLeft;
			disY=oEvent.clientY-oClock.offsetTop;
			document.onmousemove=function(ev){
				var oEvent=ev||event;
				oClock.style.left=oEvent.clientX-disX+'px';
				oClock.style.top=oEvent.clientY-disY+'px';
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				move(oClock,aPos1);
			}
		};
//第三页
	//鼠标跟随函数
		function hoverDir(obj,ev){
			if(!Array.prototype.indexOf){
				Array.prototype.indexOf = function(val){
				   var value = this;
				   for(var i =0; i < value.length; i++){
				      if(value[i] == val) return i;
				   }
				   return -1;
				};
			}
			var x1=Math.abs(ev.clientX-(obj.offsetWidth+obj.offsetLeft)-obj.parentNode.offsetLeft);
			var x2=Math.abs(ev.clientX-obj.offsetLeft-obj.parentNode.offsetLeft);
			var y1=Math.abs(ev.clientY-(obj.offsetHeight+obj.offsetTop)-obj.parentNode.offsetTop);
			var y2=Math.abs(ev.clientY-obj.offsetTop-obj.parentNode.offsetTop);
			var arr=[x1,y1,x2,y2];
			var arr2=[x1,y1,x2,y2];
			var arr3=[ev.clientY,obj.offsetTop,y1]
			arr.sort(function(n1,n2){
				return n1-n2;
			})
			return arr2.indexOf(arr[0]);
		}
	//案例图片
		for (var i = 0; i < aProjectLi.length-1; i++) {
			aProjectLi[i].index=i;
			aProjectLi[i].onmouseover=function(ev){
				var oEvent=ev || event;
				var from=oEvent.fromElement || oEvent.relatedTarget;
				if(this.contains(from))return;
				var n=hoverDir(this,oEvent);
				switch(n){
					case 0:
						this.children[0].children[1].style.left='200px';
						this.children[0].children[1].style.top=0;
						break;
					case 1:
						this.children[0].children[1].style.left=0;
						this.children[0].children[1].style.top='150px';
						break;
					case 2:
						this.children[0].children[1].style.left='-200px';
						this.children[0].children[1].style.top=0;
						break;
					case 3:
						this.children[0].children[1].style.left=0;
						this.children[0].children[1].style.top='-150px';
						break;
				}
				//move(this.children[0].children[1],{left:0, top:0,opacity:1},{time:300});
				this.children[0].children[0].style.transform='scale(1.2)';
			}
			aProjectLi[i].onmouseout=function(ev){
				var oEvent=ev || event;
				var to=oEvent.toElement || oEvent.relatedTarget;
				if(this.contains(to))return;
				var n=hoverDir(this,oEvent);
				switch(n){
					case 0:
						move(this.children[0].children[1],{left:-200,top:0,opacity:0});
						break;
					case 1:
						move(this.children[0].children[1],{left:0,top:-200,opacity:0});
						break;
					case 2:
						move(this.children[0].children[1],{left:200,top:0,opacity:0});
						break;
					case 3:
						move(this.children[0].children[1],{left:0,top:200,opacity:0});
						break;
				}
				this.children[0].children[0].style.transform='scale(1)';
			}
			aProjectLi[i].onclick=function(){
				oShowWork.children[1].src='sample/'+this.index+'/index.html'
				oShowWork.style.display='block';
				move(oShowWork,{opacity:1});
			}
		}
	//查看更多
		oSeeMore.onmouseover=function(){
			this.innerHTML='MORE';
		}
		oSeeMore.onmouseout=function(){
			this.innerHTML='· · ·';
		}
		oSeeMore.onclick=function(){
			for (var i = 0; i < aProjectLi.length; i++) {
				(function(index){
					move(aProjectLi[i],{opacity:0,top:-300},{time:300,end:function(){
						aProjectLi[index].style.top='300px';
					}});
				})(i)
			}
			oMore.style.display='block';
			move(oMore,{left:0,opacity:1})
		};
	//更多返回主页
		oMore.children[0].onclick=function(){
			move(oMore,{left:oBox.offsetWidth,opacity:0},{end:function(){
				oMore.style.disabled='none';
			}});
			for (var i = 0; i < aProjectLi.length; i++) {
				move(aProjectLi[i],{opacity:1,top:0},{time:300});
			}
		};
	//案例返回主页
		oShowWork.children[0].onclick=function(){
			move(oShowWork,{opacity:0},{end:function(){
				oShowWork.style.display='none';
				oShowWork.children[1].src='';
			}});
		}
		oHome.style.left=clientW/2-oHome.offsetWidth/2+'px';
		oHome.style.top=clientH/2-oHome.offsetHeight/2+'px';
//左侧导航
	//导航按钮
		oBtn.onmouseover=function(){
			if (oBox.offsetLeft==-200) {
				oP.style.color='#000';
				move(oMoveSpan,{left:50},{time:400});
				move(oLeft,{opacity:0});
				move(oRight,{opacity:0});
			}
		};
		oBtn.onmouseout=function(){
			if (oBox.offsetLeft==-200) {
				oP.style.color='#fff';
				move(oMoveSpan,{left:0},{time:400});
				move(oLeft,{opacity:0.5});
				move(oRight,{opacity:0.5});
			}
		};
		oBtn.onclick=oLayer.onclick=function(){
			clearInterval(oMoveSpan.timer);
			if (oBox.offsetLeft==-200) {
				move(oBox,{left:0},{time:500});
				oP.innerHTML='&lt;';
				oMoveSpan.style.left=0;
				oP.style.color='#fff';
				oLayer.style.display='block';
				move(oLayer,{opacity:0.5},{time:500});
			}else{
				move(oLeft,{opacity:0.5});
				move(oRight,{opacity:0.5});
				move(oBox,{left:-200},{time:500});
				move(oLayer,{opacity:0},{time:500,end:function(){
					oLayer.style.display='none';
				}});
				oP.innerHTML='&gt;';
			}
			return false;
		};
	//灯泡切换
		objLoadLogo.children[0].onmouseover=function(){
			move(objLoadLogo.children[0],{top:-270});
		};
		objLoadLogo.children[0].onmouseout=function(){
			move(objLoadLogo.children[0],{top:-280});
		};
	//导航菜单
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].index=i;
			aLi[i].onclick=function(){
				iNow=this.index;
				oTitle.children[0].style.top=-54*iNow+'px';
				move(oBox,{left:-200},{time:500});
				move(oLayer,{opacity:0},{time:500,end:function(){
					oLayer.style.display='none';
				}});
				oP.innerHTML='&gt;';
				for (var i = 0; i < oSign.children.length-1; i++) {
					oSign.children[i].className='';
				};
				oSign.children[iNow].className='active';
				for (var i = 0; i < aScreen.length; i++) {
					aScreen[i].style.top=-clientH+'px';
				};
				aScreen[iNow].style.top=0;
				move(aScreen[iNow],{opacity:1});
			};
			aLi[i].onmouseover=function(){
				this.children[0].style.color='#00a2e9';
				move(this.children[0].children[0],{opacity:1,left:-15},{time:100});
				move(this.children[0].children[2],{opacity:1,right:-15},{time:100});
				move(oTitle.children[0],{top:-54*this.index},{time:300});
			};
			aLi[i].onmouseout=function(){
				this.children[0].style.color='#fff';
				move(this.children[0].children[0],{opacity:0,left:-50},{time:100});
				move(this.children[0].children[2],{opacity:0,right:-50},{time:100});
			};
		}
	//页面标题恢复
		oNavi.children[1].onmouseout=function(ev){
			var oEvent=ev||event;
			var oTo=oEvent.toElement||oEvent.relatedTarget;
			if (oNavi.children[1].contains(oTo)) return;
			move(oTitle.children[0],{top:-54*iNow},{time:300});
		};
//右侧指示
		oSign.onmouseover=function(){
			move(this,{opacity:1});
		};
		oSign.onmouseout=function(){
			move(this,{opacity:0.3},{time:1500})
		}
		for (var i = 0; i < aSign.length-1; i++) {
			aSign[i].index=i;
			aSign[i].onclick=function(){
				for (var i = 0; i < aSign.length-1; i++) {
					aSign[i].className='';
				}
				this.className='active';
				for (var i = 0; i < aScreen.length; i++) {
					if (this.index==iNow){
						return;
					}else{
						move(aScreen[i],{top:-clientH,opacity:0});
					}
				};
				iNow=this.index;
				move(oTitle.children[0],{top:-54*iNow},{time:300});
				move(aScreen[iNow],{top:0,opacity:1});
				if (oBottomMenu.children[1].style.display=='none') {
					move(oBottomMenu,{height:40},{end:function(){
						bSign=true;
					}});
					oBottomMenu.children[1].style.display='block';
				}
			};
		}
		/*oWait.onmouseover=function(ev){
			var oEvent=ev||event;
			var oFrom=oEvent.fromElement||oEvent.relatedTarget;
			if (oWait.contains(oFrom)) return;
			move(oSpb1,{height:30},{time:100})
			move(oSpb2,{width:100},{time:200,end:function(){
				move(oSp0,{top:0},{time:300,end:function(){
					move(oP2,{opacity:1});oP1.style.opacity=0;
				}});
			}});
			move(oSpb3,{height:30},{time:100,end:function(){
				
				move(oSpb4,{width:100},{time:200});
			}});
		};
		oWait.onmouseout=function(ev){
			var oEvent=ev||event;
			var oTo=oEvent.toElement||oEvent.relatedTarget;
			if (oWait.contains(oTo)) return;
			move(oSp0,{top:-30},{time:300,end:function(){
				oP2.style.opacity=0;
				move(oP1,{opacity:1})
				move(oSpb2,{width:0},{time:200,end:function(){
					move(oSpb1,{height:0},{time:100});
				}});
				move(oSpb4,{width:0},{time:200,end:function(){
					move(oSpb3,{height:0},{time:100});
				}});
			}})
		};
		oWait.onclick=function(){
			move(objLoading,{opacity:0},{end:function(){
	    		move(objLoadLogo.children[0],{top:-280},{time:500,end:function(){
	    			move(oBox,{left:-200},{time:300,end:function(){
						oCover.style.display='none';
	    			}});
	    		}})
	    		move(oLayer,{opacity:0},{time:500,end:function(){
					oLayer.style.display='none';
				}});
	    		objLoading.style.display = "none";
	    	}})
		};*/
	}
})
