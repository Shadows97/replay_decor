(function( $ ) {
	
	var templateUrl = color_ajax_object.site_url;
	
	// console.log(templateUrl);
	// color switcher
	function swithcerMenu () {
		if ($('.switch_menu').length) {

		  $('.switch_btn button').on('click', function(){
			$('.switch_menu').toggle(500)
		  });
		 // var newURL = window.location.protocol + "//" + window.location.host + "/";
		// var pageURL = $(location).attr("href");
			console.log(templateUrl);
		  $('#styleOptions').styleSwitcher({
		  hasPreview: true,
		  fullPath: `${templateUrl}/wp-content/plugins/color-sds-picker/css/color/`,
			   cookie: {
				expires: 30,
				isManagingLoad: true
				}
		  });

		};
  }
  swithcerMenu();


})( jQuery );