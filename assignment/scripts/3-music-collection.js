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

// Create a function called showCollection to take in an array and log each item in the array to the Console
function showCollection(array) {
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
function findByArtist(artistName, array) {
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
