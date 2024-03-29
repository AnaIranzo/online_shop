import React from "react";
import { useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import List from './List/List';

const AllProducts = (props) => {
  
  const [ascendingTitle, setAscendingTitle] = useState(true);
  const [descendingTitle, setDescendingTitle] = useState(false);
  const [ascendingRating, setAscendingRating] = useState(false);
  const [descendingRating, setDescendingRating] = useState(false);
  const [ascendingPrice, setAscendingPrice] = useState(false);
  const [descendingPrice, setDescendingPrice] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);



  useEffect(()=> {
    
  }, [ ascendingTitle, descendingTitle,ascendingRating,descendingRating, ascendingPrice, descendingPrice])

  /**Limit 10 products/page */

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = props.products
      .slice(offset, offset + PER_PAGE)
      .map(( products ) => products);
  const pageCount = Math.ceil(props.products.length / PER_PAGE);

function handlePageClick({ selected: selectedPage }) {
  setCurrentPage(selectedPage);
}

  /**Sort products by title, rating, price */
  const filterOrders = () => {
    const dataArr = currentPageData;

    // ASCENDING TITLE
    if (ascendingTitle) {
      const searchAscArr = dataArr.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );

      return searchAscArr;
    }

    // DESCENDING TITLE
    if (descendingTitle) {
      const searchDescArr = dataArr.sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      );
      return searchDescArr;
    }

    // ASCENDING RATING
    if (ascendingRating) {
      const searchAscArr = dataArr.sort((a, b) =>
        a.rating.rate > b.rating.rate ? 1 : b.rating.rate > a.rating.rate ? -1 : 0
      );

      return searchAscArr;
    }

    // DESCENDING RATING
    if (descendingRating) {
      const searchDescArr = dataArr.sort((a, b) =>
        a.rating.rate < b.rating.rate ? 1 : b.rating.rate < a.rating.rate ? -1 : 0
      );
      return searchDescArr;
    }

    // ASCENDING PRICE
    if (ascendingPrice) {
      const searchAscArr = dataArr.sort((a, b) =>
        a.price > b.price? 1 : b.price > a.price ? -1 : 0
      );

      return searchAscArr;
    }

    // DESCENDING PRICE
    if (descendingPrice) {
      const searchDescArr = dataArr.sort((a, b) =>
        a.price < b.price ? 1 : b.price < a.price ? -1 : 0
      );
      return searchDescArr;
    }

    
    
    return currentPageData;
  };

console.log(currentPageData);
  filterOrders(props.setProducts);

  const showDetails = (e) => {
      console.log(e);
  }


  return <section className="all-products">
            <section className="all-products-btns">
              <button className="sort_btn css-button-sliding-to-bottom--green"
                onClick={(e) => { 
                  ascendingTitle ?  setAscendingTitle(false) : setAscendingTitle(true);
                  ascendingTitle ? setDescendingTitle(true) : setDescendingTitle(false);  
                  setAscendingPrice(false);
                  setDescendingPrice(false);
                  setAscendingRating(false)
                  setDescendingRating(false)

                  
                  // setIsCountryCode(false);
                }}> Title              
                </button>

          
              <button className="sort_btn css-button-sliding-to-top--green"
                onClick={(e) => {
                  ascendingRating ?  setAscendingRating(false) : setAscendingRating(true);
                  ascendingRating ? setDescendingRating(true) : setDescendingRating(false);  
                  setAscendingTitle(false);
                  setDescendingTitle(false);
                  setAscendingPrice(false);
                  setDescendingPrice(false);

                }}>
                Rating
              </button>
          
              <button className="sort_btn css-button-sliding-to-bottom--green"
                onClick={(e) => {
                  ascendingPrice ?  setAscendingPrice(false) : setAscendingPrice(true);
                  ascendingPrice ? setDescendingPrice(true) : setDescendingPrice(false); 
                  setAscendingTitle(false);
                  setDescendingTitle(false); 
                  setAscendingRating(false)
                  setDescendingRating(false)
                }}>
                Price
              </button>
              </section>
    <List data={currentPageData} showDetails={showDetails}/>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      
          

  </section>;

};

export default AllProducts;
