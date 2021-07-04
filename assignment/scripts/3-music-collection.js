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
  console.log(`There are ${array.length} items in this collection.`);
  for (item of array) {
    console.log(`${item.albumTitle} by ${item.albumArtist}, published in ${item.albumYear}`);
  }
}
// testing showCollection
console.log(`Collection is now ${collection}`);
console.log(showCollection(collection));
