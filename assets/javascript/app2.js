$(document).ready(function(){
	console.log("ready");
//array of buttons on html page. save to a variable called 'topics'
	var topics = ["Cat","Dog"];

//function to re-render HTML to display buttons 
	function displayAnimalGifs(){
		// console.log("hi pete you clicked the button congrats");
		//query the API for the animal entered in search box 
		var animal = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=5ORhLA6yFlPWQQjvuxqii6agBpcSG47G&limit=10";

		// console.log(this);
		// Creating an AJAX call for the specific movie button being clicked
		$.ajax({
			url: queryURL,
	    	method: "GET"
	    }).done(function(response) {
	     	console.log(response);

			// Creating a div to hold the animal results from the API call
		    var animalDiv = $("<div class='animal'>");
			// create a variable to store all results from the API call	    	
	    	var results = response.data;

	    	for(var i = 0; i < results.length; i++) {

	    		console.log(results[i].rating);

	    		// //get the still image url
		    	var imgStillURL	= results[i].images.fixed_height_still.url;

	    		// // use jQuery to create a div to hold this image and rating
	    		var thisResultDiv = $('<div>');

	    		// rating	    		
	    		var thisRating = results[i].rating
  				var ratingDiv = $("<p>").text("Rating: " + thisRating);

  				// image
  				var imageElement = $("<img>");
  				// below: set image src to be imgStill URL

  		    	
  				// append ratingDiv to thisResultDiv


  				// append imageElement to thisResultDiv


  				// append thisResultDiv to the DOM



	    	}










			//run a for loop to go through all 10 results listed in API call
	    	//for (var i=0; i <results.length; i++) {

			//Store the API results for image rating
	    	var rating = response.Rated;
			//Create an element to have the rating displayed
			//var pOne = $("<p>").text("Rating: " + results[i].rating);
	    	var pOne = $("<p>").text("Rating: " + rating);
	    	animalDiv.append(pOne);

			//Retrieve the URL for each image
	    	var imgStillURL = response.data.image.fixed_height_still.url;
	    	var imageAnimateURL = response.data.image.fixed_height.url;
			//Create the element to hold the image		    	
	    	//var image = $("<img>").attr("src",results[i].imageStillURL);
	    	var image = $("<img>").attr("src", imageStillURL);
			//Append each image
	    	animalDiv.append(image);

			//when image of API call is clicked enable the giphy to animate//
			//------CODE from pausing-gifs-solution--------//
			//$(".gif").on("click", function() {
			      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
			//var state = $(this).attr("data-state");
			      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
			      // Then, set the image's data-state to animate
			      // Else set src to the data-still value
			//if (state === "still") {
	        //$(this).attr("src", $(this).attr("data-animate"));
	        //$(this).attr("data-state", "animate");
	      	//} else {
	        //$(this).attr("src", $(this).attr("data-still"));
	        //$(this).attr("data-state", "still");
	      	//}
	    	//});
		    
		});
	} // displayAnimalGifs()	

//Function for displaying animal buttons	
	function renderButtons(){
// Deleting the animal buttons prior to adding new buttons		
		$("#animalButtons").empty();
// Looping through the array
		for (var i = 0; i < topics.length; i++) {
//Generate new buttons
		var a = $("<button>");
		a.addClass("animal");
		a.attr("data-name", topics[i]);
		a.text(topics[i]);
//Add the button to the animalButtons div
		$("animalButtons").append(a);

		}
	}

//function for clicking movie button
	$("#addAnimal").on("click", function(event) {
		event.preventDefault();
//pulls string from search box
		var animal = $("#animal-input").val().trim();
//add animal to the array
		topics.push(animal);
//call the earlier functon renderButtons to process array
		renderButtons();
	});

	$(document).on("click", ".animal", displayAnimalGifs);

//Call the renderButton function to display buttons
	renderButtons();



})