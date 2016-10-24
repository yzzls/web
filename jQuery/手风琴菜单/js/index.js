function sfq(){
	var $acc = $('.sfq'),
	    $h1 = $acc.find('h1');
	    
	$h1.on('click',function(){
		var $this = $(this),
		    //$ul = $this.siblings();
		    $ul = $this.parent().find('ul');
		$ul.toggle();
		$this.parent().siblings().find('ul').hide();
	});
}
sfq();
