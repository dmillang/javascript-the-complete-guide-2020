const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const {title: movieTitle} = info;
    // const { getFormattedTitle } = movie;
    let text = movie.getFormattedTitle() + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;
  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title, // assign same for key and value ('title' string for key but title constant declared in this function as value)
      [extraName]: extraValue,
    },
    id: Math.floor(Math.random() * 1000),
    getFormattedTitle: function() {
      return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);

  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchButton.addEventListener('click', searchMovieHandler);
