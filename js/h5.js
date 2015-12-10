'use strict';
//clock
window.onload = function(){
	;(function(){
		var oClock = document.querySelector('#clock');
		var aImg = oClock.getElementsByTagName('img');
		function tick(){
			var oDate = new Date();
			var h = oDate.getHours();
			var m = oDate.getMinutes();
			var s = oDate.getSeconds();
			var str = toDou(h)+toDou(m)+toDou(s);
			for(var i=0;i<aImg.length;i++){
				//aImg[i].style.top=-35*str.charAt(i)+'px';
				startMove(aImg[i],{top:-35*str.charAt(i)},{time:300});
			}
		}
		tick();
		setInterval(tick,1000);
	})();
	//shadow
	;(function(){
		var oS1 = document.getElementById('s1');
		var oH = oS1.children[0];
		document.addEventListener('mousemove',fnMove,false);
		function fnMove(ev){
			var x1 = ev.pageX;
			var y1 = ev.pageY;
			var x2 = oS1.offsetLeft+oS1.offsetWidth/2;
			var y2 = oS1.offsetTop+oS1.offsetHeight/2;
			var disX = (x2-x1)/3;
			var disY = (y2-y1)/3;
			var dis = Math.sqrt(disX*disX+disY*disY)/20;
			oH.style.textShadow = disX+'px '+disY+'px '+dis+'px black';
		};
	})();
	//switch
	;(function(){
		var oSwitch = document.getElementById('switch');
		var oPrev = oSwitch.getElementsByTagName('button')[0];
		var oNext = oSwitch.getElementsByTagName('button')[1];
		var oUl = oSwitch.getElementsByTagName('ul')[0];
		var aLi = oUl.children;
		var iNow = 2;
		oPrev.onclick=function(ev){
			var oDiv = this.children[0];
			var oSon = oDiv.children[0];
			var x = ev.pageX-this.offsetLeft;
			var y = ev.pageY-this.offsetTop;
			oSon.style.left = x+'px';
			oSon.style.top = y+'px';
			addClass(oDiv,'is-active');
			oDiv.addEventListener('animationend',function(ev){
				removeClass(oDiv,'is-active');
			},false);
			oDiv.addEventListener('webkitAnimationEnd',function(ev){
				removeClass(oDiv,'is-active');
			},false);
			oDiv.addEventListener('MSAnimationEnd',function(ev){
				removeClass(oDiv,'is-active');
			},false);
			iNow--;
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
			}
			if(iNow==1)iNow=13;
			aLi[(iNow-2)%aLi.length].className='l2';
			aLi[(iNow-1)%aLi.length].className='l1';
			aLi[iNow%aLi.length].className='cur';
			aLi[(iNow+1)%aLi.length].className='r1';
			aLi[(iNow+2)%aLi.length].className='r2';
		};
		oNext.onclick=function(ev){
			var oDiv = this.children[0];
			var oSon = oDiv.children[0];
			var x = ev.pageX-this.offsetLeft;
			var y = ev.pageY-this.offsetTop;
			oSon.style.left = x+'px';
			oSon.style.top = y+'px';
			addClass(oDiv,'is-active');
			oDiv.addEventListener('animationend',function(ev){
				removeClass(oDiv,'is-active');
			},false);
			oDiv.addEventListener('webkitAnimationEnd',function(ev){
				removeClass(oDiv,'is-active');
			},false);
			oDiv.addEventListener('MSAnimationEnd',function(ev){
				removeClass(oDiv,'is-active');
			},false);
			iNow++;
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
			}
			aLi[(iNow-2)%aLi.length].className='l2';
			aLi[(iNow-1)%aLi.length].className='l1';
			aLi[iNow%aLi.length].className='cur';
			aLi[(iNow+1)%aLi.length].className='r1';
			aLi[(iNow+2)%aLi.length].className='r2';
		};
	})();
	//3dbox
	;(function(){
		var oBox3d = document.getElementById('box3d');
	 	var oBox = oBox3d.children[0];
        var timer = null;
        var x = 0;
        var y = 0;
        var bLeft = false;
        var bRight = false;
        var bTop = false;
        var bBottom = false;
        timer = setInterval(function(){
            if(bRight){
                x += 15;
                oBox.style.WebkitTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.MozTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.msTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.transform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
            }
            if(bLeft){
                x -= 15;
                oBox.style.WebkitTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.MozTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.msTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.transform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
            }
            if(bTop){
                y -= 15;
                oBox.style.WebkitTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.MozTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.msTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.transform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
            }
            if(bBottom){
                y += 15;
                oBox.style.WebkitTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.MozTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.msTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.transform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
            };
        },30);
        document.onkeydown = function(ev){
            if(ev.keyCode==37)bLeft = true;
            if(ev.keyCode==38)bTop = true;
            if(ev.keyCode==39)bRight = true;
            if(ev.keyCode==40)bBottom = true;
        };
        document.onkeyup = function(ev){
            if(ev.keyCode==37)bLeft = false;
            if(ev.keyCode==38)bTop = false;
            if(ev.keyCode==39)bRight = false;
            if(ev.keyCode==40)bBottom = false;
        };
        document.addEventListener('mousedown',fnDown3d,false);
        function fnDown3d(ev){
            var oldX = ev.pageX-x;
            var oldY = ev.pageY-y;
            document.addEventListener('mousemove',fnMove3d,false);
            document.addEventListener('mouseup',fnUp3d,false);
            function fnMove3d(ev){
                x = ev.pageX-oldX;
                y = ev.pageY-oldY;
                oBox.style.WebkitTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.MozTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.msTransform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
                oBox.style.transform = 'perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
            };
            function fnUp3d(){
            	document.removeEventListener('mousemove',fnMove3d,false);
            	document.removeEventListener('mouseup',fnUp3d,false);
            };
            return false;
        };
	})();
	//video
	;(function(){
		var oVBox = document.getElementById('video5');
		var oBox = oVBox.querySelector('.box');
        var oControl = document.querySelector('#controls');
        var oVideo = document.querySelector('#video');
        var oPlay = document.querySelector('.playBtn');
        var oPause = document.querySelector('.pauseBtn');
        var oBarBox = document.querySelector('#barBox');
        var oBar = document.querySelector('#bar');
        var oSlide = document.querySelector('.slide');
        var oTimeline = document.querySelector('.timeline');
        var oNum = document.querySelector('em');
        var bOk = true;
        oBox.onmouseover = function(){
            oControl.style.opacity = 1;
        };
        oBox.onmouseout = function(){
            oControl.style.opacity = 0;
        };
        oVideo.onclick = function(){
            if(bOk){
                oVideo.play();
                oPlay.style.display = 'none';
                oPause.style.display = 'block';
            }else{
                oVideo.pause();
                oPause.style.display = 'none';
                oPlay.style.display = 'block';
            }
            bOk = !bOk;
        };
        oPlay.onclick = function(){
            oVideo.play();
            this.style.display = 'none';
            oPause.style.display = 'block';
            bOk = false;
        };
        oPause.onclick = function(){
            oVideo.pause();
            this.style.display = 'none';
            oPlay.style.display = 'block';
            bOk = true;
        };
        oSlide.onmousedown = function(ev){
            var disX = ev.clientX-oSlide.offsetLeft;
            oVideo.pause();
            bOk = false;
            document.onmousemove = function(ev){
                var l = ev.clientX-disX;
                if(l<-3){
                    l=-3;
                }else if(l>oBar.offsetWidth-oSlide.offsetWidth+3){
                    l=oBar.offsetWidth-oSlide.offsetWidth+3;
                }
                oSlide.style.left = l+'px';
                var scale = (l+3)/(oBar.offsetWidth-oSlide.offsetWidth+6);
                oTimeline.style.width = oBar.offsetWidth*scale+'px';
                oVideo.currentTime = oVideo.duration*scale;
            };
            document.onmouseup = function(){
                oPlay.style.display = 'none';
                oPause.style.display = 'block';
                oVideo.play();
                this.onmousemove = null;
                this.onmouseup = null;
            };
            return false;
        };
        oVideo.ontimeupdate=function(){
    		var scale = oVideo.currentTime/oVideo.duration;
    		oTimeline.style.width = scale*(oBar.offsetWidth)+'px';
    		oSlide.style.left = scale*(oBar.offsetWidth+6-oSlide.offsetWidth)-3+'px';
            oNum.innerHTML = time2min(this.currentTime)+'/'+time2min(this.duration);
            console.log(scale);
            if(scale==1){
                oVideo.currentTime = 0
                oVideo.pause();
                oPause.style.display = 'none';
                oPlay.style.display = 'block';
                bOk = true;
            };
    	};
        oBar.onclick = function(ev){
            var disX = ev.clientX-getPos(oBar).left;
            var scale = disX/(oBar.offsetWidth+6);
            oSlide.style.left = scale*(oBar.offsetWidth+6-oSlide.offsetWidth)-3+'px';
            oTimeline.style.width = scale*(oBar.offsetWidth)+'px';
            oVideo.currentTime = oVideo.duration*scale;
            oVideo.play();
            oPlay.style.display = 'none';
            oPause.style.display = 'block';
        };
        function toDou(iNum){
            return iNum<10?'0'+iNum:''+iNum;
        }
        function time2min(time){
        	var sMin = parseInt(time/60);
        	var sSec = parseInt(time%60);
        	return toDou(sMin)+':'+toDou(sSec);
        }
        function getPos(obj){
            var pos = {};
            pos.left = 0;
            pos.top = 0;
            while(obj.offsetParent){
                pos.left += obj.offsetLeft;
                pos.top += obj.offsetTop;
                obj = obj.offsetParent;
            }
            return pos;
        }
	})();
	//can 柱状图
	;(function(){
		var oC = document.getElementById('c1');
		var gc = oC.getContext('2d');
		var arr = [67,321,287,34,150,210,400,340,rnd(0,401),rnd(0,401),rnd(0,401),rnd(0,401)];
		var space = oC.width/(arr.length*4-1);
		var w = space*3;
		var max = Math.max.apply(null,arr);
		for(var i=0;i<arr.length;i++){
			var h = arr[i]/max*oC.height;
			gc.beginPath();
			gc.fillStyle = 'rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
			gc.fillRect(i*(w+space),oC.height-h,w,h);
		}
	})();
	//pencil
	;(function(){
		var oC = document.getElementById('c3');
		var gd = oC.getContext('2d');
		gd.strokeStyle = '#22C3AA';
		gd.lineWidth = 5;
		gd.beginPath();
		oC.onmousedown = function(ev){
			gd.moveTo(ev.pageX-oC.offsetLeft,ev.pageY-oC.offsetTop);
			document.addEventListener('mousemove',fnMovePic,false);
			document.addEventListener('mouseup',fnUpPic,false);
			function fnMovePic(ev){
				gd.clearRect(0,0,oC.width,oC.height);
				gd.lineTo(ev.pageX-oC.offsetLeft,ev.pageY-oC.offsetTop);
				gd.stroke();
				console.log(1);
			};
			function fnUpPic(){
				document.removeEventListener('mousemove',fnMovePic,false);
				document.removeEventListener('mouseup',fnUpPic,false);
			};
			return false;
		};
	})();
};