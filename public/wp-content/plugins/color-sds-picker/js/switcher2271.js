(function($){var templateUrl=color_ajax_object.site_url;function swithcerMenu(){if($('.switch_menu').length){$('.switch_btn button').on('click',function(){$('.switch_menu').toggle(500)});console.log(templateUrl);$('#styleOptions').styleSwitcher({hasPreview:true,fullPath:`${templateUrl}/wp-content/plugins/color-sds-picker/css/color/`,cookie:{expires:30,isManagingLoad:true}});};}
swithcerMenu();})(jQuery);