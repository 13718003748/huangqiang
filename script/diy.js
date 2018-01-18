$(function () {
    $(".list_dt li,.slide_c a").unbind('click');
    //加载文章弹出层
    $(".list_dt li,.slide_c a").click(function () {
        $("body").append('<div class="bg1"><div class="bg2" id="html"></div></div>');
        var id = $(this).attr("data");
        var type = $(this).attr("type");
        $("#html").load("content.php?id="+id+"&type="+type, function () {
            $(".bg1").show().animate({height: $(window).height(), top: 0}, 400, "swing", function () {
                $(".bg2").show().animate({height: $(window).height(), top: 0}, 400, "swing");
                scrollbox();
            });
        });
    });

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
                    t=0;
                   // return false;
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
    scrollbox();

    $('.page a').live('click', function () {
		
        $("#html").load(this.href, function () {
            $(".bg1").show().animate({height: $(window).height(), top: 0}, 400, "swing", function () {
                $(".bg2").show().animate({height: $(window).height(), top: 0}, 400, "swing");
            });
			scrollbox();
        });

        return false;
    });

});

