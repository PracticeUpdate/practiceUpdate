;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        // At load, if user hasn't scrolled more than 20px or so...
  			if( $(window).scrollTop() < 20 ) {
          window.scrollTo(0, 1);
        }
      }, 0);
    });
  }

})(jQuery, this);

/*--
//
//PracticeUpdate Scripts
//
 --*/

 /*-- TypeKit--*/
/*
(function() {
    var config = {
      kitId: 'zwv8ekz',
      scriptTimeout: 3000
    };
    var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
  })();
*/

/*-- Panel - make dismissable --*/
;(function ($, window, undefined) {
  'use strict';

  $.fn.practiceupdatePanel = function (options) {
    var settings = $.extend({
      callback: $.noop
    }, options);

    $(document).on("click", ".panel a.close", function (e) {
      e.preventDefault();
      $(this).closest(".panel").fadeOut(function () {
        $(this).remove();
        // Do something else after the alert closes
        settings.callback();
      });
    });

  };

})(jQuery, this);

/*-- END Panel --*/

/*-- PracticeUpdate Site Initialize --*/

;(function siteInit($, window, undefined) {
  'use strict';

//MUSTACHE CALLS
//ONLY NECESSARY FOR LOCAL FRONT-END DEV

//TODO: make async
//NOTE: http://stackoverflow.com/questions/1531693/ajax-async-false-request-is-still-firing-asynchronously

//TODO: Load all
//NOTE: http://stackoverflow.com/questions/11675702/nested-partials-in-mustache-and-loading-partials-from-external-file
// // json1.js
// var user = {
//     fname: 'joe',
//     lname: 'blogs',
// }
// // json2.js
// var translations = {
//     someword: 'its translation'
// }

//NOTE: use local storage for tempaltes: https://github.com/jarednova/jquery-total-storage

// $.get('test.mustache', function(templates) {
//     var json = $.extend(user, translations),
//         one = $(templates).filter('#tpl-one').html(),
//         three = $(templates).filter('#tpl-three').html(),
//         two = $(templates).filter('#tpl-two').html(),
//         partials = {
//             "tplThree": three,
//             "tplTwo": two
//         };

//     var html = Mustache.to_html(one, json, partials);
//     $('#mustacheContainer').html(html);
// }, "html");

//  })();

  function loadTemplates(){
  /*-- Mustache - Top-bar --*/
   $.getJSON('content/json/top-bar.json', function(data) {
    $.get('assets/mustache/top-bar.mustache', function(template) {
      var html = Mustache.to_html(template, data);
      $('.page-header').html(html);
/*       $(document).foundation('topbar'); */

      //on mustache callback - initialize off canvas func
      //from jquery.offcanvas.js
      // Watch for clicks to show the sidebar
      var $selector2 = $('#sidebarButton'),
      events = 'click.fndtn';
      if ($selector2.length > 0) {
        $('#sidebarButton').on(events, function (e) {
          e.preventDefault();
          $('body').toggleClass('active');
        });
      }

      var b = $('body');
      if(b.hasClass('page-update')) {
        $('#main-nav .update').parent('li').addClass('active');
      }
      if(b.hasClass('page-explore')) {
        $('#main-nav .explore').parent('li').addClass('active');
      }
      if(b.hasClass('page-learn')) {
        $('#main-nav .learn').parent('li').addClass('active');
      }
    });
  });

  /* Mustache - homepage user-console template */

  $.get('assets/mustache/user-console.mustache', function(template) {
    //alert('Load was performed.');
    var html = Mustache.to_html(template);
    $('.user-console').html(html);
    $('.user-console').practiceupdateDrawer();
    if($('body').hasClass('page-preferences')){
      $('.user-settings-menu').toggleClass('is-collapsed is-expanded');
      $('.user-settings-menu li:first').addClass('active');
    }
  });


  /* Mustache - homepage footer template */
  $.get('assets/mustache/page-footer.mustache', function(template) {
    //alert('Load was performed.');
    var html = Mustache.to_html(template);
    $('.page-footer').html(html);
  });

  /* Mustache - explore slider template */
  // $('.explore-feature').orbit({pauseOnHover: false, directionalNav: false, bullets: true, fluid: '16x9'});
  //   console.log("explore slider initialized");
  /*-- Modals --*/

  //Import Modals
  $.get('assets/mustache/modals.mustache', function(template) {
    var html = Mustache.to_html(template);
    $('body').append(html);
  });

  $.get('assets/mustache/modals-forgot-password.mustache', function(template) {
      var html = Mustache.to_html(template);
      $('body').append(html);
    });

	/* <!-- Mustache - homepage feed template --> */
	$.getJSON('content/json/feed.json', function(data) {
		$.get('assets/mustache/feed-item.mustache', function(template) {
			// alert('Load was performed.');
	    var html = Mustache.to_html(template, data);
	    $('.stream-container').html(html);
		});

	});

	/* <!-- Mustache - homepage recent template --> */
	$.getJSON('content/json/recent.json', function(data) {
		$.get('assets/mustache/recent.mustache', function(template) {
			// alert('Load was performed.');
	    var html = Mustache.to_html(template, data);
	    $('.recent').html(html);
		});

	});

	/* <!-- Mustache - homepage user-topic template --> */
	$.get('assets/mustache/user-topic.mustache', function(template) {
		// alert('Load was performed.');
    var html = Mustache.to_html(template);
    $('.user-topic').html(html);
        // tamingselect();
	});

	/* <!-- Mustache - homepage topic-spotlight template --> */
	$.get('assets/mustache/topic-spotlight.mustache', function(template) {
		//alert('Load was performed.');
    var html = Mustache.to_html(template);
    $('.topic-spotlight').html(html);
	});

	/* <!-- Mustache - homepage ad template --> */
	// $.get('assets/mustache/ad.mustache', function(template) {
	// 	//alert('Load was performed.');
 //    var html = Mustache.to_html(template);
 //    $('.ad').html(html);
	// });

	/* <!-- Mustache - homepage meet-experts --> */
	$.get('assets/mustache/cta-meet-experts.mustache', function(template) {
		//alert('Load was performed.');
    var html = Mustache.to_html(template);
    $('.cta.meet-experts').html(html);
	});
  }; /* end loadTemplates */
  loadTemplates();

  var $doc = $(document);

  $(document).ready(function() {
    $.fn.practiceupdatePanel           ? $doc.practiceupdatePanel() : null;
  });

/*
$(document).foundation('section dropdown alerts topbar', function (response) {
  console.log(response.errors);
});
*/

//(function siteInit(){
//'use strict';

//drawer interaction function
// .drawer .drawer-menu, .drawer-toggle > a
//TODO: correct transition animation
//TODO: setup options, so this can easily be applied to any element as a function
  ;(function($) {
    $.fn.practiceupdateDrawer = function(options) {
      options = {};
    $('ul.drawer-menu').addClass('is-collapsed');
    //$('li.active > a, dd.active > a').append('<span class="active-item-indicator"><i class="icon-chevron-right"></i></span>');
    $('.drawer-toggle-button').click(function (){
      $('ul.drawer-menu').toggleClass('is-collapsed is-expanded');
      $('.drawer-toggle-button i').toggleClass('icon-angle-down icon-angle-up');
    });
    };
  })(jQuery);

})(jQuery, this);

//disable .disabled links
  $(document).ready(function() {
    $('.disabled a').click(function(e) {
      e.preventDefault();
    });
  });


function menuInit() {
/*   $('.top-level-nest a').preventDefault(); */
  var menuParentHeight;

  $('.top-level-nest ul ul').prepend('<li><a href="#" class="back-button button small">back</a></li>');
  $('.top-level-nest ul:first').addClass('menu-parent');
  menuParentHeight = $('.menu-parent').height();
  $('.top-level-nest ul:first a').click(function() {
  $('.current-child a').not('.back-button').not('current').click(function(){
    $('.current-child .current').removeClass('current');
    $(this).addClass('current');
  });
  $(this).siblings('ul:first').addClass('current-child');
    var curChildHeight = $(this).siblings('ul:first').height();
    $('.top-level-nest').height(curChildHeight);
    $('.menu-parent').addClass('tier-two');
    }
  );

/*   $('.top-level-nest ul ul a').click(function() {}); */
  $('a.back-button').click(function(){
    $('.top-level-nest').height(menuParentHeight);
    $('.current-child').removeClass('current-child');
    $('.menu-parent').removeClass('tier-two');
  });

};
menuInit();