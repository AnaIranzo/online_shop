
import AllProducts from './AllProducts/AllProducts';



const Main = ({products, setProducts}) => {
 


  return <main>
    <AllProducts products={products} setProducts={setProducts}/>

  </main>;
};

export default Main;
