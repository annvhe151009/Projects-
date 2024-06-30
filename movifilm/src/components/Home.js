import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9999/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
    </div>
  );
};

export default Home;
