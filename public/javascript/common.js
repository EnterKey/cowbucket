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
			count = $(".selectpicker-page option:selected").val() || 1;
			requestURL = requestURL + '/' + name + '/' + count + '/unauto';
		} else {
			time = $(".selectpicker-count option:selected").val() || 1;
			count = $(".selectpicker-page option:selected").val() || 1;
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
	
	$('#unauto-mode > .selectpicker-page').change(function(){
        var page = $(".selectpicker-page option:selected").val();
        var time = $(".selectpicker-time option:selected").val();
        alert(page + ', ' + time);
    });
    
    $('#unauto-mode > .selectpicker-time').change(function(){
        var page = $(".selectpicker-page option:selected").val();
        var time = $(".selectpicker-time option:selected").val();
        alert(page + ', ' + time);
    });
};
	

$(document).ready(function() {
	common.setEventListener();
});

