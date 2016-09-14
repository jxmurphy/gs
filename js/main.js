jQuery(document).ready(function($){
	//intro logo animaiton 
	$('.logo').addClass('logo-animation');
	//open menu
	$('.menu-trigger').on('click', function(event){
		event.preventDefault();
		$('.main-content').addClass('move-out');
		$('.main-nav').addClass('is-visible');
		$('.ah-shadow-layer').addClass('is-visible');
		$('.social-icons').addClass('animate-in');
		$('ul.ah-navigation').addClass('fade-in');
		// return window to top after menu has opened
		setTimeout(function() { window.scrollTo(0,0); }, 600);
	});
	//close menu
	$('.close-menu, .link').on('click', function(event){
		event.preventDefault();
		$('.main-content').removeClass('move-out');
		$('.main-nav').removeClass('is-visible');
		$('.ah-shadow-layer').removeClass('is-visible');
		$('.social-icons').removeClass('animate-in');
		$('ul.ah-navigation').removeClass('fade-in');
		//$('html, body').removeClass('remove-scroll');
	});
	//add box-shadow to nav on vscroll for desktop
	$(window).scroll(function() {  
		if ($(window).width() > 700) {  
	    var scroll = $(window).scrollTop();
	    if (scroll >= 50) {
	      $(".main-nav").addClass("box-shadow");
	      $("ul.ah-navigation").addClass("expand-width");
	    } else {
	      $(".main-nav").removeClass("box-shadow");
	      $("ul.ah-navigation").removeClass("expand-width");
	    }
	  }
	});
	var tabItems = $('.ah-navigation a'),
		tabContentWrapper = $('.ah-tabs-content');
		tabHome = $('.ah-tabs-content .home');
	tabItems.on('click', function(event){
		event.preventDefault();
		var selectedItem = $(this);
		if( !selectedItem.hasClass('selected') ) {
			var selectedTab = selectedItem.data('content'),
				selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
				slectedContentHeight = selectedContent.innerHeight();
			tabItems.removeClass('selected');
			selectedItem.addClass('selected');
			selectedContent.addClass('selected').siblings('li').removeClass('selected');
		}
		if( !tabHome.hasClass('selected') ) {
			$('.main-content').addClass('no-bkgd');
		} else {
			$('.main-content').removeClass('no-bkgd');
		}
	});
	//hide the .ah-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
	checkScrolling($('.ah-tabs nav'));
	$(window).on('resize', function(){
		checkScrolling($('.ah-tabs nav'));
		//tabContentWrapper.css('height', 'auto');
	});
	$('.ah-tabs nav').on('scroll', function(){ 
		checkScrolling($(this));
	});
	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.ah-navigation').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.ah-tabs').addClass('is-ended');
		} else {
			tabs.parent('.ah-tabs').removeClass('is-ended');
		}
	}
});