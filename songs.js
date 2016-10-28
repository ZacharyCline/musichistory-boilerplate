var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//adds to to front of the array
songs.unshift("Ride - by Twenty One Pilots on the album Ride");


//adds to the end of the array
songs.push("Heathens - by Twenty One Pilots on the album Suicide Squad: The Album");
// console.log("songs", songs);


// console.log("Arr", songs);

function removeJunk(songs) {
	// console.log("RemoveJunk");Find out if I can get within this function!
	for (i = 0; i < songs.length; i++) {
		// console.log("i", i);
		var remove = songs[i].replace(/>/g, '-').replace(/[!*\(@]/g, '');
		//arrays allow us to use . notation to 
		console.log("New songs", remove);
		document.getElementById("Songs").innerHTML += `<div>${remove}</div>`;
	};
};
removeJunk(songs);


// function replacer(match, p1, p2, p3, offset, string) {
//   // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//   return [p1, p2, p3].join(' - ');
// }
// var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);

// console.log("Experiment", newString);