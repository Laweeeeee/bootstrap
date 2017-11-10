$(function(){
	$(".middle a:nth-of-type(1)").click(function(){
		$(this).addClass("aa").siblings("a").removeClass("aa");
		$(".underp p:nth-of-type(2)").css("display","block")
		$(".undermiddle div:nth-of-type(1)>ul>li span:nth-of-type(1)").text("32");
		$(".undermiddle div:nth-of-type(2)>ul>li span:nth-of-type(1)").text("65")
	});
	
	$(".middle a:nth-of-type(2)").click(function(){
		$(this).addClass("aa").siblings("a").removeClass("aa");
		
		$(".underp p:nth-of-type(2)").css("display","none")
		$(".undermiddle div:nth-of-type(1)>ul>li span:nth-of-type(1)").text("39");
		$(".undermiddle div:nth-of-type(2)>ul>li span:nth-of-type(1)").text("79")
		
	})
})
