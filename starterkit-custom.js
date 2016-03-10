jQuery(document).ready(function() {
    $("#orderedlist").css("background-color","red");
    $("#orderedlist li").addClass("blue");
    $("#orderedlist > li:last").hover(function() {
	        $(this).css("background-color","green");
        },function(){
	        $(this).css("background-color","red");
        });
});