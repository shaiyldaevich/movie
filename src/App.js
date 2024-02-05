import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='popular' element={<Popular/>}/>
     <Route path='toprated' element={<TopRated/>}/>
     </Routes>
    </div>
  );
}

export default App;
