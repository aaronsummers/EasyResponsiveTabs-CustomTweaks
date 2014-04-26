EasyResponsiveTabs-CustomTweaks
===============================

Applying some of my own tweaks to easy responsive tabs to accordian

    <header>
        <hgroup>
            <h1>easy responsive tabs to accordian - custom actions</h1>
           <h2> A couple of tweaks that I've used on Samson Onna's Easy-Responsive-Tabs-to-Accordion.</h2>
           <small>(https://github.com/samsono/Easy-Responsive-Tabs-to-Accordion)</small>
        </hgroup>
    </header>
    
    <section>
    	<ol>
        	<li>
            	<h3>Opening a tab from another link, other than a tab</h3>
            	<p>I'm using a data-attribute to select the required tab</p>
                <pre>"&lt;a class="button" data-open-tab="0" href="#product-tabs">OPEN TAB 1&lt;/a>"</pre>
                </li>
            <li>
            	<h3>Using a custom hash for each tab in the url</h3>
                <p>In my HTML below you'll notice that I've given each li in the tabs-list an id that mirrors the tabs content in a url friendly format. These are going to be used to activate/open our required tab.</p>
                <p>I made a couple of changes to the original script for this magic to work, which is commented. <em>^^ Have a look at the url as you're clicking the tabs ^^</em></p>
            </li>
        </ol>
