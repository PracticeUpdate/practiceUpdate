<!-- /* Launching joyride when to page is loaded */ -->
<!--
<script>
  $(window).load(function() {

	  var mobileView = $(window).width() < 768;

	  var isHeaderFixed = $('.page-header').hasClass('fixed');

	  if (mobileView) {
		setTimeout(function(){
		  $('.top-bar .toggle-topbar a').click(); }, 500
		);
	  }

	  setTimeout(function(){
		$("#practiceupdate-tour").joyride({
		/* Options will go here */
			'scrollSpeed': 300,
			'postStepCallback': function(idx){

				setTimeout(function(){
					$('.joyride-tip-guide[data-index="'+(idx+1)+'"]').addClass('joyride-ready');
				},100);

				// After UPDATE for MEET EXPERTS
				if (idx == 0) {
				  if (mobileView) {
					$('.top-bar .toggle-topbar a').click();
					$('#sidebarButton').click();
				  }
				}

				// After SPECIALITY / CHANELS for EXPLORE
				if (idx == 3) {
				  if (mobileView) {
					$('.top-bar .toggle-topbar a').click();
					$('#sidebarButton').click();
				  }
				}
			}
		});

		$('.joyride-tip-guide[data-index="0"]').addClass('joyride-ready');

	  }, 1000);


  });
</script>	-->