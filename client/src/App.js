import './styles/styles.scss';
import React, {useEffect, useState} from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Main/Home/Home';
import Detail from './components/Main/Detail/Detail';
import Nav from './components/Header/Nav/Nav';
import Main from './components/Main/Main';
import Cart from './components/Main/Cart/Cart';
import NotFound from './components/Main/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { getAllProducts } from "./redux/cart/cartActions";



function App() {
  const dispatch = useDispatch();
  const _products = useSelector(state => state._products); //array de productos guardado en redux
  const numberItems = useSelector(state => state.numberItems);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, [dispatch]);
  
  
  async function fetchData() {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json();
    console.log(data);
    dispatch(getAllProducts(data))
      }



  return (
    <>

      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='/' element={<Home products={_products}/>} />
            <Route path='/products' element={<Main products={_products} setProducts={setProducts}/>} />
            <Route path='/products/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
