//Exercise 1: Get the array of all Artists.

function getAllArtists(array) {
  let result = array.map((array) => array.artist);
  console.log(result);

  //console.log("Exercise 1 ->", result);
  return result;
}

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist) {
  return array.filter((array) => array.artist === artist);
  //Write your code here
}

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array) {
  const sortedTitles = array
    .map((arrayOrderedAlphabetically) => arrayOrderedAlphabetically.title)
    .sort();

  return sortedTitles.slice(0, 10);
  //Write your code here
}

//Exercise 4: Order by year, ascending
function orderByYear() {
  const sortedYear = array
    .map((arrayOrderByYear) => arrayOrderByYear.year)
    .sort();

  return sortedYear.slice(0, 10);
  //Write your code here
}

//Exercise 5: Filter songs by genre
function songsByGenre() {
  //Write your code here
}

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
  //Write your code here
}

//Exercise 7: Get the longest song
function getLongestSong() {
  //Write your code here
}

//Exercise 8: Get the shortest song
//Write the getShortestSong() function

export {
  getAllArtists,
  getSongsFromArtist,
  orderAlphabetically,
  orderByYear,
  songsByGenre,
  minutsToSeconds,
  getLongestSong,
};
