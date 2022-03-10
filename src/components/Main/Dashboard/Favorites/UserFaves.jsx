import React, { useCallback, useEffect, useState } from "react";
import "./Favorites.css";
import ReactPaginate from "react-paginate";

const UserFaves = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoaing] = useState(false);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [pageLimit] = useState(5);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("https://fitnesso-app-new.herokuapp.com/products")
          const faveData = await response.json();
          setTotal(faveData.length);
          setPageCount(Math.ceil(faveData.length/pageLimit));
          setProducts(faveData.slice(offset, offset+pageLimit))
          setIsLoaing(true);
      }
    fetchData();
  }, [offset, pageLimit]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;  
    console.log(selectedPage);
    setOffset((selectedPage)*pageLimit);  
  }

  return (
    <div>
      <div className="fave-container">
        <header className="db-component-header">
          <h1>My Favourites ({total}) </h1>
        </header>
        {isLoading ? (
          <div className="faves-container">
            {products.map((data, key) => {
              return (
                <div className="fave-holder">
                  <div className="fave-details" key={key}>
                    <img src={`${data.image}`} alt="Image loading" />
                    <div className="fave-info">
                      <h5>Product Name: {`${data.title}`}</h5>
                      <p>Category: {`${data.category}`.toUpperCase()}</p>
                      <p>Product Cost: {`$${data.price}`}</p>
                      {/* <p>Description: {`${data.description}`}</p> */}
                    </div>
                    <div className="fave-to-cart">
                      <div className="fave-btn">
                        <a href="#">To Cart</a>
                      </div>
                      <div className="btn-rmv-fave">
                        <i className="fa-thin fa-trash-can"></i>
                        <a href="#">Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Pending...</div>
        )}
      </div>
      <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>
    </div>
  );
};

export default UserFaves;
