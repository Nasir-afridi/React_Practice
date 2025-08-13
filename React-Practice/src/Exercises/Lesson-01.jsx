import dayjs from 'dayjs';

const First = () => {
  const productSale = 10 + 8 * 2;
  const shippingCost = 5;
  const totalCost = productSale + shippingCost;     
  const day = dayjs().format('MMMM D')
  var day1 = dayjs().format('HH:mm:ss')
  return (
    <>
    {/* 1a */}
    <button>Good Job!</button>

    {/* 1b */}
    <p>My Name is Nasir</p>

    {/* 1c */}
    <p>Cotton Socks</p>
    <p>Price : $10</p>
    <button>Add to cart</button>

    {/* 1d */}
    {console.log()}

    {/* 1e */}
    <p>product cost : {productSale}</p>

    {/* 1f */}
    <p>Shipping cost : {`$${shippingCost}`}</p>
    <p>Total Cost : {`$${totalCost}`}</p>
    <button>Place your Order</button>

    {/* 1g */}
    {  console.log(day)}

    {/* 1h */}
    <p>Today is {day}</p>

    {/* 1i */}
   {console.log(day1)}
    </>
  )
}

export default First