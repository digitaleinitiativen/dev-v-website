$(document).ready(function() {
	$('[data-event-select]').hover(function() {
		$('[data-event-info]').removeClass('active')
			.filter('[data-event-info="' + $(this).data('event-select') + '"]')
			.addClass('active');
		$('[data-event-select]').removeClass('active');
		$(this).addClass('active');
	});
});