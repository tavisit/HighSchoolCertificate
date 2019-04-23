var i = 0; 			// Start Point
var images = [];	// Images Array for atom and its components
var time = 2000;	// Time Between Switch
	 
// Image List
images=["/images/atom.jpg","/images/neutron.jpg","/images/proton.jpg","/images/electron.jpg","/images/quark.jpg","/images/lepton.jpg","/images/boson.jpg"];
// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

    // Run function every x seconds
	setTimeout("changeImg()", time);
}
// Run function when page loads
window.onload=changeImg;