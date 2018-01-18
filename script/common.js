
$(window).load(function(){	
	$(".g_bg:eq(0)").animate({top:-15},200,"easeOutCirc",function(){
		$(".g_bg:eq(1)").animate({top:-25},200,"easeOutCirc",function(){
			$(".g_bg:eq(2)").animate({top:-15},200,"easeOutCirc",function(){
				$(".g_bg:eq(3)").animate({top:-20},200,"easeOutCirc",function(){
					$("#cont").animate({left:0,opacity:1},1000,"easeOutExpo",function(){
						$("#step").animate({bottom:50},800,"easeOutExpo",function(){
						$(".side").animate({top:170},1000,"easeOutExpo");
						});
					});	
				});
			});
		});
	});
})

//nav
$(function(){
	if(!$("#navCur").length) return;
	var left = $("#navCur").position().left;
	$(".nav li").hover(function(){
		var lf = $(this).position().left;
		$("#navCur").stop().animate({left:lf},600,"easeOutExpo");
	},function(){
		$("#navCur").stop().animate({left:left},600,"easeOutExpo");
	});
	
});

$(function(){
	/*$(".loading4").animate({height:$(window).height(),top:0},400,"swing",function(){	
		$(".loading3").animate({height:$(window).height(),top:0},400,"swing",function(){
			$(".loading2").animate({height:$(window).height(),top:0},400,"swing",function(){
				$(".loading1").animate({height:$(window).height(),top:0},400,"swing",function(){
					$(".bgc").hide();
				});
			});
		});
	});*/
	
	//首页banner
	var img = $("#banner > img");
	var cur = 0,auto = null;
	$("#banner img").eq(0).fadeIn();
	play();
	function play(){
		img.eq(cur).animate({opacity:1},1000,"linear").siblings("img").animate({opacity:0},1000,"linear");
		cur++;
		cur = cur >= img.length ? 0:cur;
		auto = setTimeout(play,5000);
	}
		
	var wh = $(window).height();
	var h = wh-203-150;
	$("#center").height(h);
	var bh = $("#banner img").height();
	if(h > bh){
		$("#center").height(bh).css("margin-top",wh-203-bh/2+'px');
	}
	
	//首页漂浮块
	move();
	function move(){
		$("#floatBox1").animate({left:50,top:50},3000,"linear",function(){
			$("#floatBox1").animate({left:0,top:0},3000,"linear");
		});
		$("#floatBox2").animate({"right":-50,top:-50},3000,"linear",function(){
			$("#floatBox2").animate({"right":0,top:0},3000,"linear");
		});
		setTimeout(move,6000);
	}
	//上下漂浮
	if(!$(".index").length){
		move2();
	}
	function move2(){
		$(".floatBox").stop().animate({top:50},3000,"linear",function(){
			$(".floatBox").stop().animate({top:0},3000,"linear");
		});
		setTimeout(move2,6000);
	}
	//漂浮块hover
	$(".floatBox img").hover(function(){
		var lf = $(this).position().left;
		$(this).stop().animate({"left":lf-50},1000,"linear");
	},function(){
		var lf = $(this).position().left;
		$(this).stop().animate({"left":lf+50},1000,"linear");
	});
	
	$("#btn_fbh").click(function(){
		$("#boxFBH").animate({top:"6px",opacity:1},1000,"easeOutExpo");
	});
	$("#close_fb").click(function(){
		$("#boxFBH").animate({top:-794,opacity:0},1000,"easeOutExpo");
	})
});

//鼠标横向滚动内容切换
$(function(){
	if(!$(".header").length) return;
	
	var w = $(window).width();
	var h = $(window).height();
	var hh = $(".header")[0].offsetHeight;
	var timer = null;
	$("div.cont").each(function(){
		$(this).width($(this).find(".contbox").length*w);
	}).height(h-hh);
	$(".contbox").width(w).height(h-hh);
	
	if($(".index").length){
		$(".floatBox").height(h);
	}else{
		$(".floatBox").height(h-hh);
	}
	
	//内容居中
	$(".contbox").each(function(){
		var mt = h- hh - $(this).find("div:eq(0)").height() - 100;
		if($(this).find("div:eq(0)").hasClass("lx")){
			//mt = h - hh - $(this).find("div:eq(0)").height();
		}
        $(this).find("div:eq(0)").css("margin-top",mt/2+'px');
    });
	
	//绑定鼠标滚轮事件
	if($("#cont").length){
		addEvent($("#cont")[0],'mousewheel',wheel);
		addEvent($("#cont")[0],'DOMMouseScroll',wheel);
	}
	//滚轮动画函数
	var n = 0,index = 0,sd = 240,sd2 = 260,
		len = $("#step li").length;
	function wheel(ev){
		var l = $("#cont").offset().left;
		if($("#db1").length){
			var l2 = $("#db1").position().left;
			var l3 = $("#db2").position().left;
		}
		var oEvent = ev || event;
		var bDown = true;
		bDown = oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;//滚轮方向判断	
		
		if(bDown){//下	
			n--;
			l=n*sd; 
			l2 = n*sd2,l3 = n*sd2,l4 = n*-200;
			if(-l >= $("#cont").width() - w){
				l = -$("#cont").width() + w;
				n = l/sd;
			}
			index = Math.abs(l)/w;	
			if(Math.round(index)==len-1) index = len-1;
		}else{//上
			n++;
			l=n*sd;
			l2 = n*sd2,l3 = n*sd2;
			if(l>=0){
				l=0;n=0;
			}
			index = Math.ceil(Math.abs(l)/w);
			if(Math.round(Math.abs(l)/w) == 0) index = 0;
		}
		if($("#cont").hasClass("cont_ds") || $("#cont").hasClass("cont_dt") )index-=1;
		startMove($("#cont")[0],{left:l});
		
		if(index==-1){
			$("#step li").removeClass("cur");
			return;
		}
		$("#step li").eq(index).addClass("cur").siblings().removeClass("cur");
		if($(".step_about").length){
			$(".step_about li").eq(index).addClass("curx").find("b").stop().animate({height:"100%"},300,"easeOutExpo");
			$(".step_about li").eq(index).siblings().removeClass("curx").find("b").stop().animate({height:"7px"},300,"easeOutExpo");
		}
		if($("#db1").length)startMove($("#db1")[0],{left:l2},10);
		if($("#db2").length)startMove($("#db2")[0],{left:l3},10);
		
		if($(".ari").length){
			if(l == -$("#cont").width() + w){
				startMove($(".ari")[0],{right:20,top:190},8);
			}else{
				startMove($(".ari")[0],{right:-293,top:50},4);
			}
		}
		if(oEvent.preventDefault){
			oEvent.preventDefault();
		}
		return false;
	}
	//底部导航点击定位
	$("#step li").click(function(){
		removeEvent($("#cont")[0],'mousewheel',wheel);
		removeEvent($("#cont")[0],'DOMMouseScroll',wheel);
		var index = $(this).index();
		if($("#cont").hasClass("cont_ds") || $("#cont").hasClass("cont_dt") )index+=1;
		$(this).addClass("cur").siblings().removeClass("cur");
		//$("#cont").stop().animate({left:index*-w},800,"easeOutExpo");
		startMove($("#cont")[0],{left:index*-w},4,function(){
			addEvent($("#cont")[0],'mousewheel',wheel);
			addEvent($("#cont")[0],'DOMMouseScroll',wheel);
			if($(".ari").length){
				if($("#cont").offset().left == -$("#cont").width() + w){
					startMove($(".ari")[0],{right:10,top:190},4);
				}else{
					startMove($(".ari")[0],{right:-293,top:50},4);
				}
			}
		});
		n = -index*w/sd;
	});
	//关于智城底部nav
	$(".step_about li").hover(function(){
		if($(this).hasClass("curx")) return;
		$(this).addClass("cur").find("b").stop().animate({height:"100%"},300,"easeOutExpo");
	},function(){
		if($(this).hasClass("curx")) return;
		$(this).removeClass("cur").find("b").stop().animate({height:"7px"},300,"easeOutExpo");
	}).click(function(){
		$(this).addClass("curx").siblings().removeClass("curx").trigger("mouseout");
	}).eq(0).addClass("curx").find("b").css("height","100%");
});


//内容滚动条
$(function(){
	//加载文章弹出层
	$(".list_dt li,.slide_c a").click(function(){
		$("body").append('<div class="bg1"><div class="bg2" id="html"></div></div>');
		$("#html").load("news.html",function(){
			$(".bg1").show().animate({height:$(window).height(),top:0},400,"swing",function(){	
				$(".bg2").show().animate({height:$(window).height(),top:0},400,"swing");
				scrollbox();
			});
		});
	});
	//关闭
	$("#close_pop").live("click",function(){
		$(this).parents("#html").html('');
		$(".bg1").animate({height:0,top:"50%"},400,"easeOutCubic",function(){
			$(".bg1").remove();
		});
	})
	scrollbox();
	function scrollbox(){
	$(".scrollWrap").each(function(){	
	if($(this).hasClass("contWrap")){
		//$(this).height($(window).height()-225).find(".scroll").height($(window).height()-225);
	}
	var _this = $(this);
	var drag = $(this).find(".drag"),
		scroll_w = $(this).find(".scroll").height(),
		drag_w = scroll_w - drag.height(),
		pro_w = $(this).height(),
		pro_list = $(this).find(".scrollInfo"),
		pro_list_w = pro_list.height();

	drag.bind("mousedown",function(event){
		pro_list_w = pro_list.height();
		var disx = event.clientY - $(this).position().top;
		$(document).mousemove(function(event){
			var x = event.clientY - disx;	
			setX(x);
		});
		$(document).mouseup(function(event){
			$(this).unbind("mousemove mouseup");
		});
		return false;
	});
	function setX(x){
		var t = -(_this.find(".scrollInfo").height() - pro_w);
		if(_this.find(".scrollInfo").height()<=pro_w){
			//alert("asdf")
			//return false; //低于固定高度限制滚动
			t = 0;
		}
		if(x < 0){
			x = 0;
		}else if(x > drag_w){
			x = drag_w;
		}		
		
		drag.css("top",x);	
		var scale = x/drag_w;
		pro_list.css("top",t*scale);
	}
	
	function wheel2(ev){
		var oEvent = ev || event;
		var bDown = true;
		bDown = oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
		if(bDown){
			setX(drag.position().top+20)
		}else{
			setX(drag.position().top-20)
		}
		if(oEvent.preventDefault){
			oEvent.preventDefault();
		}
		return false;
	}
	if($(this).hasClass("contWrap")){
		addEvent($(this)[0],'mousewheel',wheel2);
		addEvent($(this)[0],'DOMMouseScroll',wheel2);
	}
	});
	}
});

//招商弹出层
$(function(){
	var h = $(window).height();
	$("#box_zs").css("top",-h);
	$(".btn_zs,#ico_zs").click(function(){
		$("#box_zs").show().animate({top:"6px",opacity:1},1000,"easeOutExpo");	
	});
	$("#close_zs,#btn_tj").click(function(){
		$("#box_zs").animate({top:-h,opacity:0},600,"easeOutExpo",function(){
			$("#box_zs").hide();
		});	
	});
	//微信
	$("#wx").click(function(){
		$("#wxBox").animate({right:0},400,"easeOutExpo");
	});
	$("#closeWx").click(function(){
		$("#wxBox").animate({right:-430},400,"easeOutExpo");
	});
});

//循环滚动
$(function(){
	$("div.slide").each(function(){
		var $this = $(this);
		var ul = $(this).find(".slide_c"),
		li = ul.find("li"),
		len = li.length;
		w = li[0].offsetWidth,
		lf = ul.position().left,
		w2 = $(this).width(),
		btnLf = $(this).find(".btn_lf"),
		btnRt = $(this).find(".btn_rt");
		
		ul.width(w*len);
		
		if(len <= w2/w){
			$(this).find(".btnSide").remove();
			return;
		}
		btnRt.click(function(){
			if(!ul.is(":animated")){
				ul.animate({left:'-='+li[0].offsetWidth},600,"easeOutExpo",function(){
					var fli = $this.find(".slide_c li").first();
					ul.append(fli).css("left",0);
				});
			}	
		})
		btnLf.click(function(){
			if(!ul.is(":animated")){
				var lli = $this.find(".slide_c li").last();	
				ul.prepend(lli).css("left",-li[0].offsetWidth).animate({left:0},600,"easeOutExpo");
			}
		});
	});
});


//文本框聚焦删除默认值
$(function(){
	$(".txtfb").live({
		focus:function(){
			if($(this).val() == $(this).attr("tipmsg")){
				$(this).val('');
			}
		},
		blur:function(){
			if($(this).val() == ''){
				$(this).val($(this).attr("tipmsg"));
			}
		}
	});
});

function addEvent(obj,sEvent,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEvent,fn,false);
	}else{
		obj.attachEvent('on'+sEvent,fn);	
	}
};
//解除事件绑定
function removeEvent(obj,sEv,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(sEv,fn,false);
	}else if(obj.detachEvent){
		obj.detachEvent("on"+sEv,fn);
	}
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
};
//缓冲运动
function startMove(obj,json,s,fn){	
	
	var callback = null,sd=0;
	if(typeof arguments[2] == 'number'){	
		sd = arguments[2];
	}else{	
		sd = 8;
		callback = arguments[2];
	}	
	if(arguments.length == 4) callback = fn;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bstop = true;
		for(var attr in json){
			var icur = (attr == 'opacity') ? Math.round( parseFloat(getStyle(obj,attr)*100) ) : parseInt(getStyle(obj,attr));
			var iSpeed = (json[attr] - icur)/sd;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed):Math.floor(iSpeed);	 
			if(icur != json[attr]){
				bstop = false;
			}
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+(icur + iSpeed)+')';
				obj.style.opacity = (icur + iSpeed)/100;
			}else{
				obj.style[attr] = icur + iSpeed + 'px';
			}
		}
		if(bstop){ //妫€娴嬪仠姝�
			clearInterval(obj.timer);
			if(callback){
				callback();	
			}	
		}		
	},30);
};










