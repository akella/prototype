$(document).ready(function() {

	$('.hentry,.read__overlay').click(function (e) {
		$('body').toggleClass('is-reading');
	});
	$('.promoted__toggle').click(function (e) {
		$('.promoted').toggleClass('is-collapsed').afterTransition(function(){
			setpopup();
		});
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
	side = $('.sidenav__content');
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

	// ===============================================================
	// ===========================READ================================
	// ===============================================================
	function setpopup(){
		if(body.hasClass('is-wide')){
			curpos = $(window).scrollTop(); //current screen scroll from top
			wh = $(window).height(); //window height

			newheight = 300;
			if($('.promoted').hasClass('is-collapsed')){
				topareah = 120;
			}
			else{
				topareah = 240;
			}
				//determine top and height
				if(curpos < topareah ){ // we are at top
					newtop = topareah + margintop;
					newheight = wh - newtop + curpos - marginbot;
					newtop = topareah + margintop - curpos;
					//console.log(newheight);

				}
				else{ // at middle
					newtop = curpos + margintop;
					newheight = wh - newtop + curpos - marginbot;
					newtop = header + margintop;
				}
				// we are at bottom
				if(curpos+wh  - 20> fTop){
					newheight = fTop - curpos - marginbot - margintop + 20;
				}
			// set
			
		}
		else{
			newtop = 0;
			newheight = 'auto';
		}
		readwrap.css("top",newtop);
		readwrap.css("height",newheight);
	}
	// prevent scroll of a page
	$( '.scrollable' ).
    bind( 'mousewheel DOMMouseScroll', function (e) {
        var delta = e.wheelDelta || -e.detail || e.originalEvent.wheelDelta;
        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
        console.log(delta);
        e.preventDefault();
    });

	function setwideclass(){
		if($(window).width()>1360){
			body.addClass('is-wide');
		}
		else{
			body.removeClass('is-wide');
		}
	}



	

	


	// ==================================================================
	// ===========================SIDENAV================================
	// ==================================================================
	$('.topline__toggleaside,.sidenav__toggle').click(function (e) {
		$('body').toggleClass('is-withsidebar');
		curpos = $(window).scrollTop();
		if(curpos>0){
			side.css('top', curpos).removeClass('is-fixed');
		}
	});
	//sidebar fixed
	(function () {
		var previousScroll = 0;
		$(window).scroll(function(){
		   var currentScroll = $(this).scrollTop();
		   if(currentScroll>100){
			if (currentScroll > previousScroll){
				//going down
				   if(side.hasClass('is-fixed')){
					console.log('removing fix');
					side.removeClass('is-fixed').css('top', currentScroll);
				   }
			} else {
				//going up
				//console.log('up');
				if(!(side.hasClass('is-fixed')) && currentScroll < side.offset().top){
					side.addClass('is-fixed');
				}
			}
			previousScroll = currentScroll;
		   }
		});
	}()); //run this anonymous function immediately


	// all of this for wide screen only
	setwideclass();
	setpopup();
	$(window).scroll(function () {
		setwideclass();
		setpopup();
	});
	$(window).resize(function() {
		setwideclass();
		setpopup();
	});

});