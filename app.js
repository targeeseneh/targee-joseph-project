//this is our function that gets user informations
function submit() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let adress = document.getElementById("adress").value;
    let destination = document.getElementById("destination").value;
    const time = document.getElementById("time").value;



    getRide(destination);
}

//styling our pages display
function book() {

	document.getElementById("welcome-screen").style.display = "none"

	document.getElementById("form-page").style.display = "block"
}
//our array of objects for our drivers
	let drivers = [
	    {
			name: "James Kanmuteh",
			location: "Johnsonville",
			contact: 231776654128,
			price: "300"
		},

		{
			name: "Seydenu Seneh",
			location: "Barnersville",
			contact: 231778051778,
			price: "350"
		},

		{
			name: "Joseph Twazama",
			location: "Congo town",
			contact: 231775368797,
			price: "100"
		},

		{
			name: "Ben Gafyan",
			location: "Red light",
			contact: 231880971128,
			price: "200"
		},

		{
			name: "Sam B Morris",
			location: "Pynesville",
			contact: 231776442708,
			price: "300"
		},

		{
			name: "Nathan Safiah",
			location: "Duala",
			contact: 231778415037,
			price: "250"
		},

		{
			name: "Carlos Nah",
			location: "Logan town",
			contact: 231776728619,
			price: "275"
		},

		{
			name: "Eugene Boyah",
			location: "Sinkor",
			contact: 231775923075,
			price: "100"
		},

		{
			name: "Mark Monger",
			location: "Gardnesville",
			contact: 231775921637,
			price: "100"
		},



			
	]

//matching user location with our drivers loctions to sent a ride
function getRide(location) {
    const lowerCaseLocation = location.toLowerCase();
    
    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].location.toLowerCase() === lowerCaseLocation) {
            alert("Your ride has been booked with " + drivers[i].name + ". " + "Here is his number: " + drivers[i].contact);
            break;
        }
        else if(i+1 === drivers.length && drivers[i].location.toLowerCase != lowerCaseLocation){
        	alert("Sorry, we couldn't find a drive for your destination.")
        }
    }
}


	
