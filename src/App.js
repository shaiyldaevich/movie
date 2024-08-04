import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import MovieDatails from './components/MovieDetails';
import Topdet from './components/TopDetails';
import ActorDetails from './components/ActorDetails';
import Hero from './components/Hero';
import Search from './components/Search';
import Favorite from './components/Favorite';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/popular' element={<Popular/>}/>
     <Route path='/toprated' element={<TopRated/>}/>
     <Route path='/moviedetails/:id' element={<MovieDatails/>}/>
     <Route path='/topdet/:id'element={<Topdet/>}/>
     <Route path='/actordetails/:id'element={<ActorDetails/>}/>
     <Route path='/search/:movieName' element={<Search/>}/>
     <Route path='/favorite' element={<Favorite/>}/>
     </Routes>
    </div>
  );
}

export default App;
