var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//adds to to front of the array
//adds to the end of the array
songs.unshift("Ride - by Twenty One Pilots on the album Ride");
songs.push("Heathens - by Twenty One Pilots on the album Suicide Squad: The Album");
// console.log("songs", songs);

var songsEl= document.getElementById("Songs");


// console.log("Arr", songs);

function PopulateDom() {
	songsEl.innerHTML = "";
	// console.log("RemoveJunk");Find out if I can get within this function!
	for (i = 0; i < songs.length; i++) {
		var remove = songs[i].replace(/>/g, '-').replace(/[!*\(@]/g, '');
		//arrays allow us to use . notation to 
		console.log("New songs", remove);
		songsEl.innerHTML += `<div>${remove}</div>`;
	}
	SwitchViews();
}

var SongInput = document.getElementById("SongInput");
var ArtistInput	= document.getElementById("ArtistInput");
var AlbumInput	= document.getElementById("AlbumInput");
var AddButton = document.getElementById("buttonAdd");

AddButton.addEventListener("click", GetInput);


function GetInput(){
	songs.push(SongInput.value + " by " + ArtistInput.value + " on the album " + AlbumInput.value);
	ClearInput();
	console.log("input song", songs);
	PopulateDom();
}
PopulateDom();

function ClearInput() {
	SongInput.value ="";
	ArtistInput.value="";
	AlbumInput.value="";
}

function SwitchViews() {
	var listView = document.getElementById("list-view");
	var addView	= document.getElementById("add-view");
	
	addView.classList.add("hidden");
	listView.classList.add("visible");
	listView.classList.remove("hidden");
}
// function replacer(match, p1, p2, p3, offset, string) {
//   // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//   return [p1, p2, p3].join(' - ');
// }
// var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);

// console.log("Experiment", newString);