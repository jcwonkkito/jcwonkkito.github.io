$('.button-scroll').click(function(e){
	
	//ambil isi href//
	var tujuan = $(this).attr('href');
	
	var elemenTujuan = $(tujuan);
	
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top 
	},1000,'swing');
	
	e.preventDefault();
});


$(window).scroll (function(){
		
	var wScroll = $(this).scrollTop();
	
	$('.info').css({
		'transform' : 'translate(0px, '+ wScroll/11 +'%)'
	});


	//Activities//

	if ( wScroll > $('.Activities').offset().top -20){
		$('.Activities .img-fluid').each(function(i){
			setTimeout(function(){
				$('.Activities .img-fluid').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});
	}; 

	
	if ( wScroll > $('.follow').offset().top -180) {
		$('.hkiri').each(function(i){
			setTimeout(function(){
				$('.hkiri').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});
	}; 

	
	if ( wScroll > $('.youtube').offset().top -120){
		$('.hkanan').each(function(i){
			setTimeout(function(){
				$('.hkanan').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});
	}; 
});

