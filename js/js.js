var times = {start: 220,end:280};//sanguo

$(function(){
	initYear(times);
	$(window).resize(function(){
		initSize();
	})
	window.onmousewheel = function(e){
		if(event.wheelDelta>0){
			if($("#right div:last").html() - 11 < times.end){
				moveRightToLeft();
			}
		}else{
			if($("#right div:last").html() - 11 > times.start){
				moveLeftToRight(); 
			}
		}
		return false;
	}
	
	$("#left div").on("mouseup",function(){
		console.log($(this).html());
	});
	$("#right div").on("mouseup",function(){
		console.log($(this).html());
	});
});


function initYear(times){
	initSize();
	var boxs = '',boxs2 = '';
	for(var i =0;i<=10;i++){
		var l = times.start - i-1;
		var r = times.start + i+1 ;
		boxs  += "<div id='box" + l + "' class='boxs' y="+ l +">" + l + "</div>";
		boxs2  += "<div id='box" + r + "' class='boxs' y="+ r +">" + r + "</div>";
	}
	$("#left").append(boxs);
	$("#right").append(boxs2);
	$("#middle").html(times.start);

}
function initSize(){
	var w = $(window).width();
	var h = $(window).height();
	var center = 120;
	var ri = {width:(w - center)/2,top:h/2};
	var le = {width:(w - center)/2,top:h/2};
	var mid = {width:center,left: (w - center)/2,top:h/2}; 

	$("#left").css(le);
	$("#right").css(ri);
	$("#middle").css(mid);
}

function moveLeftToRight(){
	$("#left div:first").remove();
	$("#right div:last").remove();
	var last = parseInt($("#left div:last").attr("y")) - 1;
	var first = parseInt($("#left div:first").attr("y")) + 2;
	$("#left").append("<div id='box" + last + "' class='boxs' y="+ last +">" + last + "</div>")
	$("#right").prepend("<div id='box" + first + "' class='boxs' y="+ first +">" + first + "</div>");
	$("#middle").html(parseInt($("#right div:first").attr("y"))-1);
}
function moveRightToLeft(){
	$("#right div:first").remove();
	$("#left div:last").remove();
	var last = parseInt($("#right div:last").attr("y"))+1 ;
	var first = parseInt($("#right div:first").attr("y")) -2;
	$("#right").append("<div id='box" + last + "' class='boxs' y="+ last +">" + last + "</div>")
	$("#left").prepend("<div id='box" + first + "' class='boxs' y="+ first +">" + first + "</div>");
	$("#middle").html(parseInt($("#right div:first").attr("y"))-1);
}