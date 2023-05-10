import './styles/styles.scss';
import React, {useEffect, useState} from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Main/Home/Home';
import Detail from './components/Main/Detail/Detail';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Main/Cart/Cart';
import NotFound from './components/Main/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { getAllProducts } from "./redux/cart/cartActions";
import Payment from './components/Main/Payment/Payment';

/**Define routes, fetch allproducts data pass to redux actions */

function App() {
  const dispatch = useDispatch();
  const _products = useSelector(state => state._products); 
   // eslint-disable-next-line 
  const numberItems = useSelector(state => state.numberItems);
   // eslint-disable-next-line 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [dispatch]);
  
  
  async function fetchData() {
    const res = await fetch('https://online-shop-upri.onrender.com')
    const data = await res.json();
    console.log(data);
    dispatch(getAllProducts(data));
      }



  return (
    <>

      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home products={_products}/>} />
            <Route path='/products' element={<Main products={_products} setProducts={setProducts}/>} />
            <Route path='/products/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
