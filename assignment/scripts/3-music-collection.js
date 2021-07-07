console.log('***** Music Collection *****')

// create an empty array named collection
let collection = [];

// create a function that takes in a title, artist, and year published and creates
// a new object with those parameters
function addToCollection(title, artist, yearPublished) {
  const newObject = {
    albumTitle: title,
    albumArtist: artist,
    albumYear: yearPublished
  }
  // add the created object to the end of the collection array
  collection.push(newObject);
  // return the new object
  return newObject;
}
//test Collection
console.log(`Collection is currently: ${collection}`);
console.log('Adding 6 albums to collection',
  addToCollection('Yellow Submarine', 'The Beatles', 1969),
  addToCollection('The Black Parade', 'My Chemical Romance', 2006),
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
  console.log(`There are ${array.length} items in this collection.`);
  // make loop here for logging each album
  for (item of array) {
    console.log(`${item.albumTitle} by ${item.albumArtist}, published in ${item.albumYear}`);
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
