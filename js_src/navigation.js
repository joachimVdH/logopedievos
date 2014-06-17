$(document).ready(function() {
	
	$( "#infoA" ).click(function() {
		$('html, body').animate({ scrollTop: 0 }, 0);
		$( "#logo" ).hide();
		$( "#info" ).show();
		$( "#contact" ).hide();
		$( "#waar" ).hide();
		$( "#links" ).hide();		  		
	});
	
	$( "#contactA" ).click(function() {
		$('html, body').animate({ scrollTop: 0 }, 0);
		var iframe = document.getElementById("gmap");
		iframe.src = iframe.src;  	
		$( "#logo" ).hide();
		$( "#info" ).hide();
		$( "#contact" ).show();
		$( "#waar" ).show();
		$( "#links" ).hide();			
	});
	
	$( "#linksA" ).click(function() {
		$('html, body').animate({ scrollTop: 0 }, 0);
		$( "#logo" ).hide();
		$( "#info" ).hide();
		$( "#contact" ).hide();
		$( "#waar" ).hide();
		$( "#links" ).show();		  		
	});
	
	$( "#CompanyName" ).click(function() {
		$('html, body').animate({ scrollTop: 0 }, 0);
		$( "#logo" ).show();
		$( "#info" ).hide();
		$( "#contact" ).hide();
		$( "#waar" ).hide();
		$( "#links" ).hide();		  		
	});

});
