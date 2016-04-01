$(document).on('ready',function(){
    $('#copyright-year').text(new Date().getFullYear());
	$('body').on('click','.see-more-link',function(e){
		e.preventDefault();
		$(this).blur();
		$('#'+$(this).attr('data-more')).slideToggle('fast','linear');
		$(this).text($(this).text()=='Show More'?'Show Less':'Show More');
	});
});