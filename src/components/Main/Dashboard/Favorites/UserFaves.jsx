import React, { useCallback, useEffect, useState } from "react";
import "./Favorites.css";
import ReactPaginate from "react-paginate";

const UserFaves = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoaing] = useState(false);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [pageLimit] = useState(5);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("https://fakestoreapi.com/products")
          const faveData = await response.json();
          setPageCount(Math.ceil(faveData.length/pageLimit));
          setProduct(faveData.slice(offset, offset+pageLimit))
          setIsLoaing(true);
      }
    fetchData();
  }, [offset, pageLimit]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;  
    setOffset((selectedPage)*pageLimit);  
  }

  return (
    <div>
      <div className="fave-container">
        {isLoading ? (
          <div className="faves-container">
            {product.map((data, key) => {
              return (
                <div className="o">
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
