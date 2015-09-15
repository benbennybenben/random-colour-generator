$(document).ready(function(){
	storedRGB = [];

	$('#randomContainer').click(function(){

		function randomNumber() {
			return Math.round(Math.random() * 255); 
		};

		var red   = randomNumber();
		var green = randomNumber();
		var blue  = randomNumber();

		var newRGB = ('rgb(' + red + ', ' + green + ', ' + blue + ')');

		function applyNewColor() {
			$('body').css('background', newRGB);
			$('#randomContainer').css('color', newRGB, 'borderColor', newRGB);
		};

		randomNumber();
		applyNewColor();

		// $('#randomContainer').html(newRGB);

		function myFunction(abc){
			storedRGB.push(abc);
			var output = "";
				for (var i in storedRGB){
					output += "<li style=\"background:" + storedRGB[i] + "\">" + "<span>" + storedRGB[i] + "</span></li>";
				}
			$("#RGBlist").html(output);

			

			// console.log(storedRGB);
		}
		
		myFunction(newRGB);

		$('#currentColour').html("<span>" + newRGB + "</span>");

	});



});


	// Click List item and preview colour on BG
	// $('#RGBlist li').click(function(){
	// 	// var thisColour = $(this).css('background');
	// 	var guts = $(this).html();
	// 	alert(guts);
	// });
