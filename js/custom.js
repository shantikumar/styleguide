$(document).ready(function(){
    $( "#nav-button" ).click(function() {
        $('#sideNav').addClass('open');
        $('body').addClass('open-bg');
        $('#closeNav').removeClass('hidden');
    });
    $( "#closeNav" ).click(function() {
        $('#sideNav').removeClass('open');
        $('body').removeClass('open-bg');
        $('#closeNav').addClass('hidden');
    });

    $( "#showGlobalSearch" ).click(function(e) {
        $('#globalSearch').removeClass('hidden-xs');
        $('#globalSearch input').focus();
         e.preventDefault();
    });
    $( "#backSearch" ).click(function(e) {
        $('#globalSearch').addClass('hidden-xs');
         e.preventDefault();
    });
	
	$( "#projectSizePopout" ).click(function(e) {
        $('#measure').removeClass('hidden');
         e.preventDefault();
    });
});