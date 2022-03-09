import React from 'react'
import Button from '@material-ui/core/Button'

//Styles
import { Wrapper } from './Item.style'

const Item = ({ item, handleAddToCart }) => (
 
 <Wrapper>
   {console.log(item, 'item')}
   <img src={item.image} alt={item.title} />
   <div>
     <h3>{item.title}</h3>
     <p>{item.description}</p>
     <h3>${item.price}</h3>
   </div>
   <Button onClick={()=> handleAddToCart(item)}>Add to cart</Button>
 </Wrapper>
)

export default Item
