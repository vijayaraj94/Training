$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


function loadContent(content, title) {
	$('#page-wrapper').load(content);
}