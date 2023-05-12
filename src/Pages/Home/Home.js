import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css'
import MovieList from '../../componenets/MovieList/MovieList';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, []);

  return (
    <div className='poster'>
      <Carousel
       showThumbs={false}
       autoPlay={true}
       transitionTime={3}
       infiniteLoop={true}
       showStatus={false}
        
      >
        {popularMovies?.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div>
              <div className='posterImage'>
                <img src={`https://images.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt=''/>
                <span></span>
              </div>
              <div className='posterImage__overlay'>
                <div className='posterImage__title'>
                  {movie ? movie.original_title : ""}
                </div>
                <div className='posterImage__runtime'>
                  {movie ? movie.release_date : ""}
                </div>
                <div className='posterImage__rating'>
                  {movie ? movie.vote_average : ""}
                  <i className='fas fa-star'></i>{" "}
                </div>
                <div className='posterImage__description'>
                    {movie? movie.overview:""}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList/>
    </div>
  )
}

export default Home;
