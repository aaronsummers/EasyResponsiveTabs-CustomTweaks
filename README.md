EasyResponsiveTabs-CustomTweaks...
=====================================================================
###Applying some of my own tweaks to easy responsive tabs to accordian

####My custom actions

>A couple of tweaks that I've used on Samson Onna's Easy-Responsive-Tabs-to-Accordion.
>**(https://github.com/samsono/Easy-Responsive-Tabs-to-Accordion)**

1. Opening a tab from another link, other than a tab
----------------------------------------------------
 - I'm using a data-attribute to select the required tab
 - `<a class="button" data-open-tab="0" href="#product-tabs">OPEN TAB 1</a>`
 - add and change the data-open-tab="" to the tab number starting at 0.
 - add the id for the tabs container to link to the tabs.

2. Using a custom hash for each tab in the url
---------------------------------------------

 - In my HTML below you'll notice that I've given each li in the tabs-list an id that mirrors the tabs content in a url friendly format. These are going to be used to activate/open our required tab.
 - I made a couple of changes to the original script for this magic to work, which is commented. ^^ Have a look at the url as you're clicking the tabs ^^

`    <section class="product-tabs four-tabs">
            
    <!--Horizontal Tab-->
        <div id="product-tabs">
            
                <ul class="tabs-list clearfix">
                
                    <li id="first-tab">FIRST TAB <div class="active-arrow"></div></li>
                    
                    <li id="second-tab" class="demo-tab">SECOND TAB <div class="active-arrow"></div></li>
                    
                    <li id="third-tab">THIRD TAB <div class="active-arrow"></div></li>
                    
                    <li id="finally-the-fourth-tab">FOURTH TAB <div class="active-arrow"></div></li>
                    
                </ul><!-- /.tabs-list -->
                
            <div class="tabs-container">
            
                <div> <!-- Tab #1 -->
                <h4>TAB #1</h4>
                    <a class="button" data-open-tab="1" href="#second-tab">OPENS TAB 2</a>
                    <p> At this point, I'd set you up with a chimpanzee if it'd brought you back to the world! It's not the size mate, it's how you use it. You know, your bobby dangler, giggle stick, your general-two-colonels, master of ceremonies... Yeah, don't be shy, let's have a look. Yes, I used a machine gun. I took a Viagra, got stuck in me throat, I've had a stiff neck for hours. You wouldn't hit a man with no trousers on, would you? You are as precious to me as you were to your own mother and father. I swore to them that I would protect you, and I haven't. My lord! You're a tripod. It's not the size mate, it's how you use it. You are as precious to me as you were to your own mother and father. I swore to them that I would protect you, and I haven't. Pull my finger! Your were only supposed to blow the bloody doors off. ,</p>
                </div><!-- / Tab #1 -->
            
            
                <div> <!-- Tab #2 -->
                <h4>TAB #2</h4>
                    <a class="button" data-open-tab="3" href="#fourth-tab">OPENS TAB 4</a>
                    <p> You're only supposed to blow the bloody doors off! Pull my finger! You know, your bobby dangler, giggle stick, your general-two-colonels, master of ceremonies... Yeah, don't be shy, let's have a look. I took a Viagra, got stuck in me throat, I've had a stiff neck for hours. You wouldn't hit a man with no trousers on, would you? My lord! You're a tripod. You're only supposed to blow the bloody doors off! Jasper: Your baby is the miracle the whole world has been waiting for. You wouldn't hit a man with no trousers on, would you? Yes, I used a machine gun. You know, your bobby dangler, giggle stick, your general-two-colonels, master of ceremonies... Yeah, don't be shy, let's have a look. Your were only supposed to blow the bloody doors off. ,</p>				
                </div> <!-- / Tab #2 -->
            
            
                <div> <!-- Tab #3 -->
                <h4>TAB #3</h4>
                    <a class="button" data-open-tab="0" href="#first-tab">OPENS TAB 1</a>	
                    <p> It's not the size mate, it's how you use it. I want to shoot the pigeons... off my roof. Jasper: Your baby is the miracle the whole world has been waiting for. Yes, I used a machine gun. When I get back, remind to tell you about the time I took 100 nuns to Nairobi! My lord! You're a tripod. You are as precious to me as you were to your own mother and father. I swore to them that I would protect you, and I haven't. Pull my finger! When I get back, remind to tell you about the time I took 100 nuns to Nairobi! When I get back, remind to tell you about the time I took 100 nuns to Nairobi! Jasper: Your baby is the miracle the whole world has been waiting for. Your were only supposed to blow the bloody doors off. ,</p>					
                </div> <!-- / Tab #3 -->
            
            
                <div> <!-- Tab #4 -->
                <h4>TAB #4</h4>
                	<a class="button" data-open-tab="2" href="#third-tab">OPENS TAB 3</a>
                   <p> At this point, I'd set you up with a chimpanzee if it'd brought you back to the world! At this point, I'd set you up with a chimpanzee if it'd brought you back to the world! I want to shoot the pigeons... off my roof. You're only supposed to blow the bloody doors off! I want to shoot the pigeons... off my roof. I took a Viagra, got stuck in me throat, I've had a stiff neck for hours. </p>					
                </div> <!-- / Tab #4 -->
                
            </div><!-- /.tabs-container -->
                
            </div><!-- /.wrapper -->
        <!-- /#product-tabs -->
       `
