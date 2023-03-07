import './styles/styles.scss';
import React from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './components/Main/Home/Home';
import Detail from './components/Main/Detail/Detail';
import Nav from './components/Header/Nav/Nav';
import Main from './components/Main/Main';
import Cart from './components/Main/Cart/Cart';
import Footer from './components/Footer/Footer';


function App() {



  return (
    <>

      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Main />} />
            <Route path='/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
