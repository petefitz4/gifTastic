$(document).ready(function(){
	console.log("ready");
//array of buttons on html page. save to a variable called 'topics'
	var topics = [" "];

//function to re-render HTML to display buttons 
	function displayAnimalGifs(){

//query the API for the animal entered in search box 
		var animal = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=5ORhLA6yFlPWQQjvuxqii6agBpcSG47G&limit=10";

		console.log(this);
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

//run a for loop to go through all 10 results listed in API call
	    	for (var i=0; i <results.length; i++) {

//Store the API results for image rating
		    	var rating = response.Rated;
//Create an element to have the rating displayed
				var pOne = $("<p>").text("Rating: " + results[i].rating);
		    	animalDiv.append(pOne);

//Retrieve the URL for each image
		    	var imgURL = response.data.image.fixed_height_still.url;
//Create the element to hold the image		    	
		    	var image = $("<img>").attr("src",results[i].imageURL);
//Append each image
		    	animalDiv.append(image);
		    }
		    });
		}	

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