/**
 * Plugin Name: 	iJoomla Tabs
 * Plugin URI:  	https://ijoomla.org/wordpress-plugins/introductions/ijoomla-tabs/
 * Description: 	Responsive tabs widget for WordPress, created by iJoomla.org.
 * Version:     	1.0
 * Author			Amin Shahrokhi
 * Author URL		https://ijoomla.org/
 * Author Email		support@ijoomla.org
 * Creation Date	January 9, 2016
 * @copyright		Copyright (c) 2015 iJoomla.org. All rights reserved.
 * @license			GNU General Public License version 3 or later; see LICENSE.txt
**/

jQuery.noConflict();

jQuery(document).ready(function(){

	// Display the 1st tab content
	jQuery('.itab').each(function(){
		var itabID = jQuery(this).attr('id');
		jQuery(this).find('li.tab-button:first-child').addClass('active-tab-button');
		jQuery(this).find('article.tab-content:first-child').addClass('active-tab-content').show();

		// Reaction of clicking on each tab button
		jQuery('.itab#'+itabID+' li.tab-button').click(function(){

			if(jQuery(this).hasClass('active-tab-button'))
			{
				return;
			}
			else
			{
				jQuery('.itab#'+itabID+' li.tab-button').removeClass('active-tab-button');
				jQuery(this).addClass('active-tab-button');

				var activeTabNo = jQuery(this).attr('id').slice(11);
				var activeTabContent = 'tab_content_'+activeTabNo;
				jQuery('.itab#'+itabID+' article.tab-content').hide();
				jQuery('.itab#'+itabID+' article.tab-content#'+activeTabContent).fadeIn('fast');
			}
		});

	});

});
