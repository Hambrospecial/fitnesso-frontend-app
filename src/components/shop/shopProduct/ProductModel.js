import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const ProductModel = ({ backgroundImage,
    time,
    cost,
    product, }) => {
  return (
    
    <div className="Products">
      <div className="imgWrapper">
        <img style={{ minWidth:"100%", height:'inherit'}} src={backgroundImage} className="img"/>
      </div>
        

      <div className="product_titleContainer">
        <div className="product_titleWrapper">
          
          <span className="colour-time">{time} </span>
          <span className="colour-free"> {cost}</span>
        </div>

      <div className="productName">
        <h5 className="nameProduct">{product}</h5>
      </div>

      <div className="productTrain">
        <a href="#">View</a>
      </div>
      </div>

    </div>
  );
};

export default ProductModel;
