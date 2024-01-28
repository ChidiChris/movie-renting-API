/*Here's an example of a JavaScript class with class/static properties and methods, along with how to use and access them:*/

class MovieRentalApp {
    // Class/static property (shared by all instances)
    static availableMovies = [
      { title: "The Shawshank Redemption", genre: "Drama" },
      { title: "The Godfather", genre: "Crime" },
      { title: "The Dark Knight", genre: "Action" }
    ];
  
    // Class/static method (called directly on the class)
    static displayMovieList() {
      console.log("Available Movies:");
      MovieRentalApp.availableMovies.forEach(movie => {
        console.log(`- ${movie.title} (${movie.genre})`);
      });
    }
  
    // Instance method (called on individual objects)
    rentMovie(movieTitle) {
      const movieIndex = MovieRentalApp.availableMovies.findIndex(movie => movie.title === movieTitle);
      if (movieIndex !== -1) {
        console.log(`You've rented ${movieTitle}!`)
        MovieRentalApp.availableMovies.splice(movieIndex, 1);
      } else {
        console.log(`Movie not found.`);
      }
    }
  }
  
  // Accessing class/static properties and methods:
  
  // Accessing the static property:
  console.log(MovieRentalApp.availableMovies); // Output: Array of movie objects
  
  // Calling the static method:
  MovieRentalApp.displayMovieList(); // Outputs the movie list
  
  // Creating an instance and calling an instance method:
  const rentalApp = new MovieRentalApp();
  rentalApp.rentMovie("The Shawshank Redemption"); // Output: "You've rented The Shawshank Redemption!"
  