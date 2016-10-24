!function(window,document,$,undefined){
	var $rightNavBar = $('#rightNavBar');
	$rightNavBar.find('.menu i').on('mouseover', function(){
		var $this = $(this),
		    $target = $this.siblings('span'),
		    width = $target.width();
		$this.siblings('span').animate({'left': - width + 'px'},200);
	}).on('mouseout',function(){
		var $this = $(this);
		$this.siblings('span').animate({'left':0},200);
	})
	$('.qr.sprite').show();
	
}(window,document,jQuery);
