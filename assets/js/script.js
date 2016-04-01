$(document).on('ready',function(){
    $('#copyright-year').text(new Date().getFullYear());
	$('body').on('click','.see-more-link',function(e){
		e.preventDefault();
		$(this).blur();
		$('#'+$(this).attr('data-more')).slideToggle('fast','linear');
		$('.see-more-text',this).text($('.see-more-text', this).text()=='Show More'?'Show Less':'Show More');
		if($('.see-more-text', this).text()=='Show Less'){
			$('.download-arrow', this).css('border-bottom', '5px solid currentColor');
			$('.download-arrow', this).css('border-top', 'none');
		}else{
			$('.download-arrow', this).css('border-top', '5px solid currentColor');
			$('.download-arrow', this).css('border-bottom', 'none');
		}
	});
});