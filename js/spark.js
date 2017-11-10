$(function(){
		
			$.ajax({
				type : 'GET', //这里可以换成GET
				url : '../js/sparkdata.json',
				success : function (response, stutas, xhr) {
					console.log(response.imgs);
					for(var i=0;i<response.imgs.length;i++){
						$(".bottomp ul li ").eq(i).css("background-image","url("+response.imgs[i]+")")
					}
					
				}
			});
		
		
		
})
