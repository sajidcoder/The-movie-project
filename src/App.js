import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './componenets/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './componenets/MovieList/MovieList';
import Movie from './Pages/Movie/Movie'


function App() {
  return (
   <Router>
    <Header/>
  
    <Routes>
    
      <Route index element={<Home/>} ></Route>
      <Route path='movie/:id' element={<Movie/>} ></Route>
      <Route path='movies/:type' element={<MovieList/>} ></Route>
      <Route path='/*' element={<h2>Error Page</h2>} ></Route>
    </Routes>
   </Router>
  );
}

export default App;
