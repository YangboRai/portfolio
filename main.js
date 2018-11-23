/* IMAGE SLIDER */

var images=[];
	images[0]='images/abstractbg.png';
	images[1]='images/momo.jpg';
	images[2]='images/abstractbg.png';
	images[3]='images/momo.jpg';


function img(n){

	var slider=document.getElementById('imageSlider');
	slider.style.background="url("+ images[n-1] +" )";
	slider.style.backgroundSize="cover";

	}

/* IMAGE SLIDER END */


/* FORM TOGGLE VISIBILITY */

	function testValue(){
		var y=document.getElementById('mySelect').value;
		var x= document.getElementById('shopOther');
		if(y=='Other'){
				x.style.visibility="visible";
		}

		else {
				x.style.visibility="hidden";
		}


	}

/* 
		SERVICE HEADER SLIDER
 */
	
	$(document).ready(function(){
		$('#dot1').click(function(){
			$('.service-header1').css('display','block');
			$('.service-header2').css('display','none');
			$('.service-header3').css('display','none');
			$('#dot1').css('opacity',1);
			$('#dot2').css('opacity',.4);
			$('#dot3').css('opacity',.4);
		});
	});

	$(document).ready(function(){
		$('#dot2').click(function(){
			$('.service-header1').css('display','none');
			$('.service-header2').css('display','block');
			$('.service-header3').css('display','none');
			$('#dot1').css('opacity',.4);
			$('#dot2').css('opacity',1);
			$('#dot3').css('opacity',.4);
		});
	});

	$(document).ready(function(){
		$('#dot3').click(function(){
			$('.service-header1').css('display','none');
			$('.service-header2').css('display','none');
			$('.service-header3').css('display','block');
			$('#dot1').css('opacity',.4);
			$('#dot2').css('opacity',.4);
			$('#dot3').css('opacity',1);
		});
	});


/* 
		Nav toggle
 */
	
	$(document).ready(function(){
		$('#menu').click(function(){
			$('nav').toggleClass('active');
		});
	});

	


