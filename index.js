
class Movie {
    constructor(title, releaseYear, rentalPrice) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.rentalPrice = rentalPrice;
        this.isRented = false;
    }

    rent() {
        if (!this.isRented) {
            this.isRented = true;
            return `You have successfully rented ${this.title} for ${this.rentalPrice} dollars.`;
        } else {
            return `${this.title} is currently rented.`;
        }
    }

    returnMovie() {
        if (this.isRented) {
            this.isRented = false;
            return `Thank you for returning ${this.title}.`;
        } else {
            return `${this.title} is not currently rented.`;
        }
    }
}

class MovieStore {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    removeMovie(title) {
        this.movies = this.movies.filter(movie => movie.title !== title);
    }

    getMovie(title) {
        return this.movies.find(movie => movie.title === title);
    }

    getAvailableMovies() {
        return this.movies.filter(movie => !movie.isRented);
    }
}

// Usage:
const movieStore = new MovieStore();

const movie1 = new Movie('The Shawshank Redemption', 1994, 3);
const movie2 = new Movie('The Godfather', 1972, 5);

movieStore.addMovie(movie1);
movieStore.addMovie(movie2);

console.log(movieStore.getAvailableMovies());

console.log(movie1.rent());
console.log(movie1.returnMovie());
console.log(movie1.rent());

console.log(movieStore.getAvailableMovies());

console.log(movieStore.removeMovie('The Shawshank Redemption'));
console.log(movieStore.getAvailableMovies());
