(function(){
	var $shop = $(".Topright");
	var $cart = $(".Topright .cart-menu");
	$shop.hover(function(){
		$cart.stop().slideDown('200');
	},function(){
		$cart.stop().slideUp('400');
	}
	);
}());
// input表单
$('.input').focus(function(){
	$('.input').css("border-color","#ff6700");
	$('.icon_fdj').css("border-color","#ff6700");
	$('.keyword_list').fadeIn(500);
	$('.hot_word').fadeOut(300);
});$('.input').blur(function(){
	$('.input').css("border-color","#e0e0e0");
	$('.icon_fdj').css("border-color","#e0e0e0");
	$('.keyword_list').fadeOut(300);
	$('.hot_word').fadeIn(300);
})

// product产品下拉显示
$(".text_1").hover(function(){
	var _index = $(this).index();
	$(".menu_product").stop().slideDown(280);
	$(".nav_product").eq(_index).show().siblings().hide();
},function(){
	$(".menu_product").stop().slideUp();
})
$(".menu_product").hover(function(){
	$(this).stop().slideDown();
},function(){
	$(this).stop().slideUp();
})

// banner开始
     var items = document.getElementsByClassName('item');   //获取的那几张图片
     var points = document.getElementsByClassName('point');//获取的那几个点
     var goPrebtn = document.getElementById('goPre');  
     var goNextbtn = document.getElementById('goNext');  
     var index =0;

      var clearactive = function(){                           //首先在轮播时先把所有的class清除
      	for(var i=0;i<items.length;i++){
      		items[i].className='item';
      	}
      	for(var i=0;i<points.length;i++){
      		points[i].className='point';
      	}
      }

     var goIndex = function(){                          //goIndex相当于一个轮播介质--就是用层级的关系实现的，是哪张那张的层级就最高，就
     	clearactive();                                     //就相当于给相应的图片添加一个class名（active）
     	// console.log(index)
     	items[index].className='item active';             //一个封装好的函数，实现轮播，但是他不能自动轮播，要结合定时器用*
     	points[index].className='point active';
     }

     setInterval(function(){      //定时器  指定轮播图几秒换一次，if语句用来限制在这四张图里来回切换
				if(index < 4){         //首先if语句现在0,1,2,3,4里循环
					index++;         //然后在执行上面已经封装好的goIndex函数
				}else{
					index = 0;
				}
				goIndex();
			},5000)

     var goNext = function(){
     	if(index < 4){
     		index++;
     	} else{
     		index = 0;
     	}
     	goIndex();
     }

     var goPre = function(){
     	if(index == 0){
     		index = 4;
     	} else{
     		index--;
     	}
     	goIndex();
     }

     goNextbtn.onclick = function(){
     	goNext();
     }

     goPrebtn.onclick = function(){
     	goPre();
     }

     for(var i=0;i<points.length;i++){                //用for循环实现点击右下角的小点切换到对应的图片上，getAttribute和上面的data-index
			points[i].onclick= function(){                  //是存数据的用来指定相应的图片的
				var pointIndex=this.getAttribute('data-index');
				index=pointIndex;
				goIndex();
			}
		};
// banner结束

// 产品类表轮播
$(function(){

	var page=1;
	var i=6;
	var $p_Div=$(".xm_flash_right");
	var $picDiv=$(".xm_product_list");
	var picNum=$picDiv.children("li").length;
	var page_count=Math.ceil(picNum/4);//返回
	var $pDiv_w=$p_Div.width()+14;    //width()获取宽度（px）

	$(".goNext").click(function(){
		if(page_count>page){
			$picDiv.animate({left:'-'+page*$pDiv_w+"px"},"normal");
			page++;
			if(page>=page_count){
				$(this).css({'color':'#e0e0e0'});
			}
		}
	});
	$(".goPre").click(function(){
		if(page>1){
			$picDiv.animate({left:"+="+$pDiv_w+'px'},"normal");
			page--;
			if(page<=1){
				$(this).css({'color':'#e0e0e0'});
			}
		}
	});
});

$('.xm_hover').hover(function(){
	$(this).addClass("xm_active");
},function(){
	$(this).removeClass("xm_active");
});

// 家电hover
$('.all_list li').hover(function(){
	$("#"+$(this).attr("control")).show().siblings().hide();;
	$(this).addClass("all_over").siblings().removeClass("all_over");
});

// 为你推荐 产品类表轮播
$(function(){

	var page=1;
	var $p_Div=$(".tuijian");
	var $picDiv=$(".tui_item");
	var picNum=$picDiv.children("li").length;
	var page_count=Math.ceil(picNum/5);//返回
	var $pDiv_w=$p_Div.width()+14;    //width()获取宽度（px）

	$(".goNext1").click(function(){
		if(page_count>page){
			$picDiv.animate({left:'-'+page*$pDiv_w+"px"},"normal");
			page++;
			if(page>=page_count){
				$(this).css({'color':'#e0e0e0'});
			}
		}
	});
	$(".goPre1").click(function(){
		if(page>1){
			$picDiv.animate({left:"+="+$pDiv_w+'px'},"normal");
			page--;
			if(page<=1){
				$(this).css({'color':'#e0e0e0'});
			}
		}
	});
});

// 内容轮播
// $(function(){

// 	var page=1;
// 	var i=6;
// 	var $p_Div=$(".xm_content");
// 	var $picDiv=$(".xm_c_list");
// 	var picNum=$picDiv.children("li").length;
// 	var page_count=Math.ceil(picNum/5);//返回
// 	var $pDiv_w=$p_Div.width();    //width()获取宽度（px）

// 	$(".xm_c_right").click(function(){
// 		if(page_count>page){
// 			$picDiv.animate({left:'-'+page*$pDiv_w+"px"},"normal");
// 			page++;
// 			if(page>=page_count){
// 				$(this).css({'color':'#e0e0e0'});
// 			}
// 		}
// 	});
// 	$(".xm_c_left").click(function(){
// 		if(page>1){
// 			$picDiv.animate({left:"+="+$pDiv_w+'px'},"normal");
// 			page--;
// 			if(page<=1){
// 				$(this).css({'color':'#e0e0e0'});
// 			}
// 		}
// 	});
// });


// 回到顶部
$(document).ready(function(){
	        //为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））

	$(window).scroll(function(){

		 //创建一个变量存储当前窗口下移的高度

		 var scroTop = $(window).scrollTop();

		//判断当前窗口滚动高度

		//如果大于100，则显示顶部元素，否则隐藏顶部元素

		if(scroTop>100){

			$('.comeTop').fadeIn(200);

		}else{

			$('.comeTop').fadeOut(200);

		}

	});


	//为返回顶部元素添加点击事件

	$('.comeTop').click(function(){

		//将当前窗口的内容区滚动高度改为0，即顶部

		$("html,body").animate({scrollTop:0},"fast");

	});

});





