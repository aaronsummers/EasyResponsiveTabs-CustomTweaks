EasyResponsiveTabs-CustomTweaks...
Applying some of my own tweaks to easy responsive tabs to accordian
=====================================================================

easy responsive tabs to accordian - custom actions

A couple of tweaks that I've used on Samson Onna's Easy-Responsive-Tabs-to-Accordion.
(https://github.com/samsono/Easy-Responsive-Tabs-to-Accordion)

Opening a tab from another link, other than a tab

 - I'm using a data-attribute to select the required tab

 - "<a class="button" data-open-tab="0" href="#product-tabs">OPEN TAB 1</a>"



Using a custom hash for each tab in the url

 - In my HTML below you'll notice that I've given each li in the tabs-list an id that mirrors the tabs content in a url friendly format. These are going to be used to activate/open our required tab.

 - I made a couple of changes to the original script for this magic to work, which is commented. ^^ Have a look at the url as you're clicking the tabs ^^