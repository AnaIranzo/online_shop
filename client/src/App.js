import './styles/styles.scss';
import React, {useEffect, useState} from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './components/Main/Home/Home';
import Detail from './components/Main/Detail/Detail';
import Nav from './components/Header/Nav/Nav';
import Main from './components/Main/Main';
import Cart from './components/Main/Cart/Cart';
import NotFound from './components/Main/NotFound/NotFound';
import Footer from './components/Footer/Footer';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  
  function fetchData() {
  fetch('http://localhost:5000/products')
  .then(res => res.json())
  .then(data => setProducts(data))
      }



  return (
    <>

      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='/' element={<Home products={products}/>} />
            <Route path='/products' element={<Main products={products} setProducts={setProducts}/>} />
            <Route path='/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
