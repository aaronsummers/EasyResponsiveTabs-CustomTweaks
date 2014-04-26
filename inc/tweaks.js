
(function ($) {
	/*
 *	ENABLE EASY RESPOSIVE TABS TO ACCORDIAN
 */
	$('#product-tabs').easyResponsiveTabs({
			type: 'default',	   
			width: 'auto',
			animation: 'fade',
			fit: true
	});
	
/*
 *	CUSTOM FUNCTION TO ACTIVATE A REQUIRED TAB BASED ON DATA ATTRIBUTE
 */
$('a[data-open-tab]').click(function(){

	var opentab = $(this).attr('data-open-tab');
	
	//remove the activated tab
	var areatext = $("ul.tabs-list").find(".tab-active").first().attr('aria-controls');
	$('#product-tabs').find('[aria-controls=' + areatext + ']').removeClass('tab-active');
	$('.tabs-container').find('[aria-labelledby=' + areatext + ']').removeClass('tab-content-active').removeAttr("style");
	
	//activate the target tab when in accordian mode
	$("h2[aria-controls='tab_item-" + opentab + "']").addClass("tab-active");
	//activate the target tab when in normal mode
	$("li[aria-controls='tab_item-" + opentab + "']").addClass("tab-active");
	$(".tabs-container div[aria-labelledby='tab_item-" + opentab + "']").addClass("tab-content-active").attr("style", "display: block;");
	
});


/*
 *	CUSTOM FUNCTION TO USE THE TAB ID IN THE URL
 */
// if the URL contains a hashtag, trigger click on that tab.
if (window.location.hash !== '') {
    var thisUrlHash = window.location.hash;
    $('#product-tabs').find(thisUrlHash).click();
}

// add the class .tab-link to any old <a> tag, set the href attribute to the #id of the tab you want to switch to.
$('.tabs-list li').click(function(e){
    var thisHref = $(this).attr('id');

    $(thisHref).click();
});

})(jQuery);