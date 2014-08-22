if ( typeof (common) == typeof (undefined)) {
	common = {};
}

common.setEventListener = function() {
	$('#go-app-btn').click(function(e) {
		e.preventDefault();
		var requestURL = '/app';
		var name = $('#name').val();
		var count = $(".selectpicker-page option:selected").val();
		
		if($('.active-div').hasClass('unauto-mode')) {
			requestURL = requestURL + '/' + name + '/' + count + '/unauto';
		} else {
			var time = $(".selectpicker-count option:selected").val();
		  	// requestURL = requestURL + '/' + name + '/' + count + '/auto' + '?time='+time;
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
};
	

$(document).ready(function() {
	common.setEventListener();
});

