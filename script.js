$(document).ready(function() {
	console.log("the document is ready")
	var button = $(".orangebtn");
	button.on('click',function(){
		alert("Thank you for joining!");
	});
});
