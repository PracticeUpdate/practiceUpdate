(function(e,t,n){"use strict";var r=e(document),i=t.Modernizr;e.fn.foundationAlerts?r.foundationAlerts():null;e.fn.foundationButtons?r.foundationButtons():null;e.fn.foundationAccordion?r.foundationAccordion():null;e.fn.foundationNavigation?r.foundationNavigation():null;e.fn.foundationTopBar?r.foundationTopBar({breakPoint:900}):null;e.fn.foundationCustomForms?r.foundationCustomForms():null;e.fn.foundationMediaQueryViewer?r.foundationMediaQueryViewer():null;e.fn.foundationTabs?r.foundationTabs({callback:e.foundation.customForms.appendCustomMarkup}):null;e.fn.foundationTooltips?r.foundationTooltips():null;e("input, textarea").placeholder();i.touch&&e(t).load(function(){setTimeout(function(){t.scrollTo(0,1)},0)})})(jQuery,this);$.getJSON("content/json/top-bar.json",function(e){$.get("assets/mustache/top-bar.mustache",function(t){var n=Mustache.to_html(t,e);$(".top-bar").html(n)})});$.get("assets/mustache/main-search.mustache",function(e){var t=Mustache.to_html(e);$(".main-search").html(t)});$(".explore-feature").orbit({pauseOnHover:!1,directionalNav:!1,bullets:!0,fluid:"16x9"});$('a[href="#action-register"]').click(function(){$("body").removeClass("logged-out").addClass("logged-in")});$('a[href="#action-sign-out"]').click(function(){$("body").removeClass("logged-in").addClass("logged-out")});