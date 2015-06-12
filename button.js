$(document).ready(function(){
	
	$("h1").click(function(){
		parent = $(this).parent();
		if (parent.attr("id") == "page-8") {
		} else {
			$(this).parent().next(".hidden").delay("500").fadeToggle("1000");
			$(this).parent().fadeToggle("1000");
		}
	});
	
});