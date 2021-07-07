console.log('***** Music Collection *****')

// create an empty array named collection
let collection = [];

//Format seconds to show up properly in tracklist
function secondsCalc(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

// Pre-define tracks
let tracks1 = [
  ['In My Life', 2, 26],
  ['Come Together', 3, 14],
  ['All You Need is Love', 3, 51]
]
let tracks2 = [
  ['Welcome to the Black Parade', 6, secondsCalc(0, 2)],
  ['Helena', 2, 45],
  ['Teenagers', 3, secondsCalc(5, 2)]
]

// create a function that takes in a title, artist, and year published and creates
// a new object with those parameters
function addToCollection(title, artist, yearPublished, trackList = tracks1) {
  const newObject = {
    albumTitle: title,
    albumArtist: artist,
    albumYear: yearPublished,
    albumTracks: trackList
  }
  // add the created object to the end of the collection array
  collection.push(newObject);
  // return the new object
  return newObject;
}
//test Collection
console.log(`Collection is currently: ${collection}`);
console.log('Adding 6 albums to collection',
  addToCollection('Yellow Submarine', 'The Beatles', 1969, tracks1),
  addToCollection('The Black Parade', 'My Chemical Romance', 2006, tracks2),
  addToCollection('Danger Days', 'My Chemical Romance', 2010),
  addToCollection('Rubber Soul', 'The Beatles', 1965),
  addToCollection('Let it Bleed', 'The Rolling Stones', 1969),
  addToCollection('Led Zeppelin', 'Led Zeppelin', 1969),
);
console.log(`Collection is now ${collection}`);

// ***THIS SECTION WAS AN EXPERIMENT BUT IF YOU HAVE ANY INPUT IF IT SHOULD HAVE BEEN DONE THIS WAY I WOULD LOVE TO HEAR,
// UNFORTUNATELY I'M OUT OF TOWN FOR THE REST OF THE WEEK SO I DON'T HAVE TIME TO REWRITE THE REST OF MY CODE***

// function addToCollection (title, artist, yearPublished) {
//   const newObj = {};
//   newObj.title = title;
//   newObj.artist = artist;
//   newObj.yearPublished = yearPublished;
//   collection.push(newObj);
//   return newObj;
// }
//
// //testing addColl
// console.log(`Collection is: ${collection}`);
// console.log('TESTING addToCollection --- Adding 6 albums to collection',
//   addToCollection('Yellow Submarine', 'The Beatles', 1969),
//   addToCollection('The Black Parade', 'My Chemical Romance', 2006),
//   addToCollection('Danger Days', 'My Chemical Romance', 2010),
//   addToCollection('Rubber Soul', 'The Beatles', 1965),
//   addToCollection('Let it Bleed', 'The Rolling Stones', 1969),
//   addToCollection('Led Zeppelin', 'Led Zeppelin', 1969),
// );
// console.log(`Collection is now: ${collection}`);

// Create a function called showCollection to take in an array and log each item in the array to the Console
function showCollection(array = collection) {
  // First log the amount of items in the array
  console.log(`There are ${array.length} albums in this collection.`);
  // make loop here for logging each album
  for (item of array) {
    console.log(`${item.albumTitle} by ${item.albumArtist}, published in ${item.albumYear}\n
      1. ${item.albumTracks[0][0]}: ${item.albumTracks[0][1]}:${item.albumTracks[0][2]}\n
      2. ${item.albumTracks[1][0]}: ${item.albumTracks[1][1]}:${item.albumTracks[1][2]}\n
      3. ${item.albumTracks[2][0]}: ${item.albumTracks[2][1]}:${item.albumTracks[2][2]}\n`);
  }
}
// testing showCollection
console.log(showCollection(collection));

//create function findByArtist which will take in a string, create an array to hold results,
//loop through the collection and add objects to the created array. and return the array
function findByArtist(artistName, array = collection) {
  let results = [];
  // instead of looping through collection as the instructions request I will loop through an input array for re-usability
  for (item of array) {
    if (item.albumArtist === artistName) {
      results.push(item);
      //console.log(`${item.albumTitle} was made by ${artistName}`);
    }
  }
  return results;
}
// Testing findByArtist
console.log('Checking collection for albums made by The Beatles', findByArtist('The Beatles', collection));
console.log('Checking collection for albums made by My Chemical Romance', findByArtist('My Chemical Romance', collection));
console.log('Checking collection for albums made by Led Zeppelin', findByArtist('Led Zeppelin', collection));
console.log('Checking collection for albums made by Marvin Gaye', findByArtist('Marvin Gaye', collection));

//Create a function called search that takes in an object and returns an array showing all items
//from an array that match all the search criteria. if no object is provided return all albums in collection.
function search(searchObject="", array = collection) {
  //create an array to store any potential results
  let results = [];
  //Check if searchObject is null/empty, if not, loop through array/collection and add matches to results
  if (searchObject || searchObject !== "") {
    for (item of array) {
      if (searchObject.artist === item.albumArtist && searchObject.year === item.albumYear) {
        results.push(item);
      }
    }
  } else {
    for (item of array) {
      results.push(item);
    }
  }
  //return results
  return results;
}
//testing search
console.log('Testing search for The Beatles, 1969', search({artist: 'The Beatles', year: 1969}, collection));
console.log('Testing search for My Chemical Romance, 2010', search({artist: 'My Chemical Romance', year: 2010}, collection));
console.log('Testing search for Marvin Gaye, 1971...Should be empty list', search({artist: 'Marvin Gaye', year: 1971}, collection));
console.log('Testing search for The Beatles, 1920...Should be empty list', search({artist: 'Marvin Gaye', year: 1971}, collection));
console.log('Testing for empty string provided for searchObject...Should show entire collection', search("", collection));
console.log('Testing for no searchObject provided...Should show entire collection', search());

//
