if ( typeof (common) == typeof (undefined)) {
	common = {};
}

common.setEventListener = function() {
	$('#go-app-btn').click(function(e) {
		e.preventDefault();
		var requestURL = '/app', 
			name = $('#name').val() || '김소마', 
			count, 
			time;
		
		if($('.active-div').hasClass('unauto-mode')) {
			count = $("#unauto-mode-selectpicker-page option:selected").val() || 1;
			requestURL = requestURL + '/' + name + '/' + count + '/unauto';
		} else {
			time = $("#auto-mode-selectpicker-count option:selected").val() || 1;
			count = $("#auto-mode-selectpicker-page option:selected").val() || 1;
		  	requestURL = requestURL + '/' + name + '/' + count + '/auto' + '/' + time;
		}
		
		window.location.replace(requestURL);
	});
	
	$('#auto-mode').on('mouseover', function() {
		if(!$('#auto-mode').hasClass('active-div')) {
			$('#unauto-mode').removeClass('active-div');
			$('#auto-mode').addClass('active-div');
		}
	});
	
	$('#unauto-mode').on('mouseover', function() {
		if(!$('#unauto-mode').hasClass('active-div')) {
			$('#auto-mode').removeClass('active-div');
			$('#unauto-mode').addClass('active-div');
		}
	});
	
	$('#auto-mode-selectpicker-count').change(function(){
        var page = $("#auto-mode-selectpicker-count option:selected").val();
        var time = $("#auto-mode-selectpicker-page option:selected").val();
        $('.active-div-content-time').html(page*time);
    });
    
    $('#auto-mode-selectpicker-page').change(function(){
        var page = $("#auto-mode-selectpicker-count option:selected").val() || 1;
        var time = $("#auto-mode-selectpicker-page option:selected").val() || 1;
        $('.active-div-content-time').html(page*time);
    });
};
	

$(document).ready(function() {
	common.setEventListener();
});

