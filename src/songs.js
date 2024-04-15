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
function orderByYear(songs) {
  const clonedSongs = [...songs];

  // Ordenar las canciones por año y título
  clonedSongs.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return clonedSongs;
  //Write your code here
}

//Exercise 5: Filter songs by genre
function songsByGenre(songs, genre) {
  return songs.filter((song) => song.genre.includes(genre));
  //Write your code here
}

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(songs) {
  if (!Array.isArray(songs)) {
    throw new Error("La entrada debe ser un arreglo.");
  }

  const convertedSongs = songs.map((song) => {
    const [minutes, seconds] = song.duration.split("min ");
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    return { ...song, duration: totalSeconds };
  });

  return convertedSongs;

  //Write your code here
}

//Exercise 7: Get the longest song
function getLongestSong(array) {
  const longestDurationSeconds = Math.max(
    ...array.map((song) => {
      const [min, sec] = song.duration.split("min ");
      return parseInt(min, 10) * 60 + parseInt(sec, 10);
    })
  );
  const longestSongs = array.filter((song) => {
    const [min, sec] = song.duration.split("min ");
    const totalSeconds = parseInt(min, 10) * 60 + parseInt(sec, 10);
    return totalSeconds === longestDurationSeconds;
  });
  return longestSongs.map((song) => ({
    ...song,
    duration: longestDurationSeconds,
  }));
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
