if ( typeof (common) == typeof (undefined)) {
	common = {};
}

common.setEventListener = function() {
	$('#go-app-btn').click(function(e) {
		e.preventDefault();
		window.location.replace("/app");
	});
};
	

$(document).ready(function() {
	common.setEventListener();
});

