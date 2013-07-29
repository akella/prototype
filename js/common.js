$(document).ready(function() {
	$('.topline__toggleaside,.sidenav__toggle').click(function (e) {
		$('body').toggleClass('is-withsidebar');
	});
	$('.hentry,.read__overlay').click(function (e) {
		$('body').toggleClass('is-reading')
	});
	$('.promoted__toggle').click(function (e) {
		$('.promoted').toggleClass('is-collapsed');
	});

	$('.site').click(function (e) {
		e.stopPropagation();
	});
	$('.sites').click(function (e) {
		$(this).addClass('is-expanded');
	});


// lets have fun with scroll, oh dear
	//elements
	readwrap = $('.read__wrap');
	header = $('.topline');
	footer = $('.footer');
	promoted  = $('.promoted ');
	body = $('body');
	//alert($('.footer').offset().top);

	// static parameters
	fh = footer.height();
	fTop = footer.offset().top;
	hh = 60;
	ph  = promoted.height();
	bh = $(document).height();
	margintop = 70;
	marginbot = 10;
	topareah = hh + ph;


	function setpopup(){
		curpos = $(window).scrollTop(); //current screen scroll from top
		wh = $(window).height(); //window height

		newheight = 300;
		//determine top and height
			if(curpos < topareah ){
				newtop = topareah + margintop;
				newheight = wh - newtop + curpos - marginbot;
				//console.log(newheight);
			}
			else{
				newtop = curpos + margintop;
				newheight = wh - newtop + curpos - marginbot;
			}
			// we are at bottom
			if(curpos+wh  + 30> fTop){
				newheight = fTop - curpos - marginbot - margintop - 30;
			}
		// set
		readwrap.css("top",newtop);
		readwrap.css("height",newheight);
	}






	// all of this for wide screen only
	setpopup();
	$(window).scroll(function () {
		setpopup();
	});
	$(window).resize(function() {
		setpopup();
	});

});