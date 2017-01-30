// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>
(function ($) {
	$.fn.extend({
		easyResponsiveTabs: function (options) {
			//Set the default values, use comma to separate the settings, example:
			var defaults = {
				type: 'default', //default, vertical, accordion;
				width: 'auto',
				fit: true,
				closed: false,
				activate: function(){},
				useDefaultHashInUrl:false
			}
			//Variables
			var options = $.extend(defaults, options);			
			var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
			var hash = window.location.hash;
			var historyApi = !!(window.history && history.replaceState);
			
			//Events
			$(this).bind('tabactivate', function(e, currentTab) {
				if(typeof options.activate === 'function') {
					options.activate.call(currentTab, e)
				}
			});

			//Main function
			this.each(function () {
				var $respTabs = $(this);
				var $respTabsList = $respTabs.find('ul.tabs-list');
				var respTabsId = $respTabs.attr('id');
				$respTabs.find('ul.tabs-list li').addClass('tab-item');
				$respTabs.css({
					'display': 'block',
					'width': jwidth
				});

				$respTabs.find('.tabs-container > div').addClass('tab-content');
				jtab_options();
				//Properties Function
				function jtab_options() {
					if (jtype == vtabs) {
						$respTabs.addClass('vtabs');
					}
					if (jfit == true) {
						$respTabs.css({ width: '100%', margin: '0px' });
					}
					if (jtype == accord) {
						$respTabs.addClass('easy-accordion');
						$respTabs.find('.tabs-list').css('display', 'none');
					}
				}

				//Assigning the h2 markup to accordion title
				var $tabItemh2;
				$respTabs.find('.tab-content').before("<h2 class='accordion' role='tab'><span class='arrow'></span></h2>");

				var itemCount = 0;
				$respTabs.find('.accordion').each(function () {
					$tabItemh2 = $(this);
					var $tabItem = $respTabs.find('.tab-item:eq(' + itemCount + ')');
					var $accItem = $respTabs.find('.accordion:eq(' + itemCount + ')');
					$accItem.append($tabItem.html());
					$accItem.data($tabItem.data());
					$tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
					itemCount++;
				});

				//Assigning the 'aria-controls' to Tab items
				var count = 0,
					$tabContent;
				$respTabs.find('.tab-item').each(function () {
					$tabItem = $(this);
					$tabItem.attr('aria-controls', 'tab_item-' + (count));
					$tabItem.attr('role', 'tab');

					//Assigning the 'aria-labelledby' attr to tab-content
					var tabcount = 0;
					$respTabs.find('.tab-content').each(function () {
						$tabContent = $(this);
						$tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
						tabcount++;
					});
					count++;
				});
				
				// Show correct content area
				var tabNum = 0;
				if(hash!='') {
					var matches = hash.match(new RegExp(respTabsId+"([0-9]+)"));
					if (matches!==null && matches.length===2) {
						tabNum = parseInt(matches[1],10)-1;
						if (tabNum > count) {
							tabNum = 0;
						}
					}
				}

				//Active correct tab
				$($respTabs.find('.tab-item')[tabNum]).addClass('tab-active');

				//keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
				if(options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {				  
					$($respTabs.find('.accordion')[tabNum]).addClass('tab-active');
					$($respTabs.find('.tab-content')[tabNum]).addClass('tab-content-active').attr('style', 'display:block');
				}
				//assign proper classes for when tabs mode is activated before making a selection in accordion mode
				else {
					$($respTabs.find('.tab-content')[tabNum]).addClass('tab-content-active accordion-closed')
				}

				//Tab Click action function
				$respTabs.find("[role=tab]").each(function () {
				   
					var $currentTab = $(this);
					$currentTab.click(function () {
						
						var $currentTab = $(this);
						var $tabAria = $currentTab.attr('aria-controls');

						if ($currentTab.hasClass('accordion') && $currentTab.hasClass('tab-active')) {
							$respTabs.find('.tab-content-active').slideUp('', function () { $(this).addClass('accordion-closed'); });
							$currentTab.removeClass('tab-active');
							return false;
						}
						if (!$currentTab.hasClass('tab-active') && $currentTab.hasClass('accordion')) {
							$respTabs.find('.tab-active').removeClass('tab-active');
							$respTabs.find('.tab-content-active').slideUp().removeClass('tab-content-active accordion-closed');
							$respTabs.find("[aria-controls=" + $tabAria + "]").addClass('tab-active');

							$respTabs.find('.tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('tab-content-active');
						} else {
							$respTabs.find('.tab-active').removeClass('tab-active');
							$respTabs.find('.tab-content-active').removeAttr('style').removeClass('tab-content-active').removeClass('accordion-closed');
							$respTabs.find("[aria-controls=" + $tabAria + "]").addClass('tab-active');
							$respTabs.find('.tab-content[aria-labelledby = ' + $tabAria + ']').addClass('tab-content-active').attr('style', 'display:block');
						}
						//Trigger tab activation event
						$currentTab.trigger('tabactivate', $currentTab);
						
						//Update Browser History
						if(historyApi) {
							var currentHash = window.location.hash;
// ORIGINAL SCRIPT
// var newHash = respTabsId+(parseInt($tabAria.substring(9),10)+1).toString();
							var newHash = $respTabs.find('ul.tabs-list li.tab-active').attr('id');
							if (currentHash!="") {
// ORIGINAL SCRIPT
//var re = new RegExp(respTabsId+"[0-9]+");
								var re = $respTabs.find('ul.tabs-list li.tab-active').attr('id');
								if (currentHash.match(re)!=null) {									
									newHash = currentHash.replace(re,newHash);
								}
								else {
// ORIGINAL SCRIPT
//newHash = currentHash+"|"+newHash;
									newHash = '#'+newHash;
								}
							}
							else {
								newHash = '#'+newHash;
							}
							//Original Script
							//history.replaceState(null,null,newHash);
							if(!options.useDefaultHashInUrl)
							history.replaceState(null,null,newHash)
						}
					});
					
				});
				
				//Window resize function				   
				$(window).resize(function () {
					$respTabs.find('.accordion-closed').removeAttr('style');
				});
			});
		}
	});
})(jQuery);

