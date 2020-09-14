
// if (navigator.userAgent.match(/iPhone/i)) {
// 	document.getElementById("video_background_home").style.display='none';
// }


if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

jQuery(document).ready(function($) {

	var $radio_panel = $('#pnl-radio'),
		$contact_panel = $('#pnl-contact'),
		$contact_mob_panel = $('#pnl-contact-mob'),
		$radio_trigger = $('#pnl-tab-radio'),
		$contact_trigger = $('#pnl-tab-contact'),
		$contact_mob_trigger = $('#pnl-tab-contact-mob');

	$contact_trigger.on('click', function(e) {
		e.preventDefault();
		if ($contact_panel.hasClass('goes-in')) {
			$contact_panel.removeClass('goes-in');
		} else {
			$radio_panel.removeClass('goes-in');
			$contact_panel.addClass('goes-in');
		}
	});

	$contact_mob_trigger.on('click', function(e) {
		e.preventDefault();
		if ($contact_mob_panel.hasClass('goes-in')) {
			$contact_mob_panel.removeClass('goes-in');
		} else {
			$radio_panel.removeClass('goes-in');
			$contact_mob_panel.addClass('goes-in');
		}
	});

	$radio_trigger.on('click', function(e) {
		e.preventDefault();
		if ($radio_panel.hasClass('goes-in')) {
			$radio_panel.removeClass('goes-in');
		} else {
			$contact_panel.removeClass('goes-in');
			$contact_mob_panel.removeClass('goes-in');
			$radio_panel.addClass('goes-in');
		}
	});

});
