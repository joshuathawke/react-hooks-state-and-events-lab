import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, toggleCart] = useState() 
  function handleClick()  {
      toggleCart(!inCart);
  }
  
  return (
    <li className={inCart ? "in-cart" : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? 'remove' : 'add'} onClick={handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;


// If the item is not in the cart, the <button> element's 
// text should read "Add to Cart", and if the item is in the cart,
//  the <button> element's text should read "Remove From Cart". 
//  Naturally, you'll also need to add state to the Item component 
//  to solve this deliverable!