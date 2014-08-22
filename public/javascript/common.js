if ( typeof (common) == typeof (undefined)) {
	common = {};
}

common.setEventListener = function() {
	$('#go-app-btn').click(function(e) {
		e.preventDefault();
		window.location.replace("/app");
	});
	
	// $('.contents > div').on('mouseover', function(e) {
// 		
	// });
	
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

