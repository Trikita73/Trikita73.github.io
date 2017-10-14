$(document).ready(function() {

	//JQuery: The script is responsible section portfolio myParallax -->

	$('#portfolio').myParallax({
		"speed" : "25"
	});

	//JQuery: This element is responsible for portfilio img -->

	$("#portfolio_grid").mixItUp();
	$("#directions_grid").mixItUp();

	//JQuery: ///+/// -->

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	//JQuery: Connection MagnificPopup -->

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline"});
	$(".popup_direct").magnificPopup({type:"inline"});

	//JQuery: This code animation in the section About -->

	$(".animation_1").animated("flipInY", "flipOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	//JQuery: He is responsible for the animation section directions Top -->

	$(".animation_directions_1").animated("fadeInLeft", "fadeOutDown");
	$(".animation_directions_2").animated("fadeInRight", "fadeOutDown");

	//JQuery: This code animation left and right section resume -->

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	//JQuery: Title animation on the header -->

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

	//JQuery: This code changes the height of the window (resize Height) -->

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//JQuery: This is code has animation sandvich -->

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");	
	});

	//JQuery: Highlighting the menu -->

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	//JQuery: This code responsible for opening menu and fade -->

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$("top_text").removeClass("h_opacify");
			$(".top_mnu").fadeOut(600); //fadeIn - ефект(скорость)
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$("top_text").addClass("h_opacify");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated")
		};			
	});

	//JQuery: This code is responsible for MagnificPopup at Portfolio and Directions -->

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});
	$(".animation_directions_1").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_direct").attr("id", "work_" + i);
	});
	$(".animation_directions_2").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_direct").attr("id", "work_" + i);
	})

	//JQuery: ///+/// -->

	$("input, select, textarea").jqBootstrapValidation();

	//JQuery: ///+/// -->

	$(".top_mnu ul a").mPageScroll2id();

});

//JQuery: He is responsible for the slow scroll and loader -->

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

//JQuery: Scroll Top -->

$('#s_top').hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#s_top').fadeIn();
			} else {
				$('#s_top').fadeOut();
			}
		});
		$("#s_top").click(function () {
			$("body, html").animate({
				scrollTop: 0
			}, 1700);
			return false;
		});
	});

//JQuery: Transfusion of Colors -->

var colors = new Array(
  [222,255,253,1],
  [209,209,209],
  [222,255,253,1],
  [222,255,253,1],
  [209,209,209]);

	var step = 0;
	//color table indices for: 
	// current color left
	// next color left
	// current color right
	// next color right
	var colorIndices = [0,1,2,3];

	//transition speed
	var gradientSpeed = 0.002;

	function updateGradient()
{
  
  if ( $===undefined ) return;
  
	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];

	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "rgb("+r1+","+g1+","+b1+")";

	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#about').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);

