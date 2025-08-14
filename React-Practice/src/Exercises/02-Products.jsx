import React from 'react'

const Products = (props) => {
    const heading = props.heading;

  return (
    <>
    {heading}
    {heading === "Cotton Socks" && <p>Price : { `$${5.30 + 5.30}`}</p>}    
    {heading === "Plain T-Shirt" && <p>Price : {`$${3.995 + 3.995}`}</p>}    
    {heading === "Tennis ball" && <p>Price : {`$${3.00+3.00}`}</p>}    
    <button>Add to Cart</button>
    </>
  )
}

export default Products