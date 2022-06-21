import './App.scss';
import { useState, useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import Board from './Pages/Board/Board';
import SignUpLogin from './Components/SignUpLogin';
import Cart from './Pages/Cart/Cart';
import PremadeShow from './Pages/PremadeShow/PremadeShow';

const App = () => {
  const URL = 'https://skate-react.herokuapp.com/'

  const [ premadeBoards, setPremadeBoards ] = useState(null);

  const getPremadeBoardsData = async () => {
    const response = await fetch(URL + 'all');
    const data = await response.json();
      setPremadeBoards(data);
    };

  useEffect(() => { getPremadeBoardsData(); }, []);
  
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header >
          <SignUpLogin />
        </Header >
      </div>
      <div className="main-wrapper">
        <main> 
          <Routes> 
            <Route path="/" element={<Home URL={URL} />} exact/>
            <Route path="/boards/:id" element={
              <PremadeShow
                boards={premadeBoards}
                URL={URL} 
              />
            } exact/>
            <Route path="/createboard" element={<Board URL={URL} />} />
            <Route path="/cart" element={<Cart URL={URL} />} />
          </Routes>
        </main>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default App;