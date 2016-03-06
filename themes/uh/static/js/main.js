$(document).ready(function() {
	$('[data-event-select]').hover(function() {
		$('[data-event-info]').removeClass('active')
			.filter('[data-event-info="' + $(this).data('event-select') + '"]')
			.addClass('active');
		$('[data-event-select]').removeClass('active');
		$(this).addClass('active');
	});

	$('[data-hover]').hover(function() {
		var $this = $(this);
		$this.data('original', $this.attr('src'));
		$this.attr('src', $this.data('hover'));
	}, function() {
		$(this).attr('src', $(this).data('original'));
	});
});