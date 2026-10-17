import React from 'react'
import './CartSidebar.css'

const CartSidebar = ({ show, setShow, cart, setCart }) => {

  // QR visibility
  const [showQr, setShowQr] = React.useState(false)

  // Increase quantity
  const increaseQty = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + 1
        }
      }

      return item
    })

    setCart(updatedCart)
  }


  // Decrease quantity
  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty - 1
          }
        }

        return item
      })
      .filter((item) => item.qty > 0)

    setCart(updatedCart)
  }


  // Remove item
  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    )

    setCart(updatedCart)
  }


  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )


  // Place order
  const handlePlaceOrder = () => {
    setShowQr(true)
  }


  return (
    <>
      {/* Background overlay */}
      {show && (
        <div
          className="cart-overlay"
          onClick={() => setShow(false)}
        ></div>
      )}


      {/* Cart Sidebar */}
      <div className="sidebar">

        {/* Header */}
        <div className="cart-header">

          <h2>🛒 Your Cart</h2>

          <button
            className="closebtn"
            onClick={() => setShow(false)}
          >
            ❌
          </button>

        </div>


        {/* Cart Items */}
        <div className="cart-items">

          {cart.length === 0 ? (

            <div className="empty-cart">

              <div className="empty-cart-icon">
                🛒
              </div>

              <h3>Your Cart is Empty</h3>

              <p>
                Add some delicious food to your cart
                and it will appear here.
              </p>

              <button
                onClick={() => setShow(false)}
              >
                Browse Food
              </button>

            </div>

          ) : (

            cart.map((item) => (

              <div
                className="cartItem"
                key={item.id}
              >

                {/* Food Image */}
                <img
                  src={item.image}
                  alt={item.name}
                />


                {/* Food Details */}
                <div className="cartDetails">

                  <h4>
                    {item.name}
                  </h4>

                  <p>
                    ₹{item.price}
                  </p>


                  {/* Quantity Controls */}
                  <div className="qtyControls">

                    <button
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.qty}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>


                {/* Remove */}
                <button
                  className="removeBtn"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  🗑️
                </button>

              </div>

            ))

          )}

        </div>


        {/* Bottom section */}
        {cart.length > 0 && (

          <div className="cart-footer">

            <div className="bill-row">
              <span>Subtotal</span>

              <span>
                ₹{total}
              </span>
            </div>


            <div className="bill-row">
              <span>Delivery Fee</span>

              <span className="free">
                FREE
              </span>
            </div>


            <div className="bill-divider"></div>


            <div className="total-row">

              <span>Total</span>

              <strong>
                ₹{total}
              </strong>

            </div>


            {/* Place Order Button */}
            {!showQr && (
              <button
                className="orderBtn"
                onClick={handlePlaceOrder}
              >
                🛒 Place Order
              </button>
            )}


            {/* QR PAYMENT SECTION */}
            {showQr && (

              <div className="qr-section">

                <h3>Scan & Pay 📱</h3>

                <p className="qr-subtitle">
                  Scan the QR code to complete your payment
                </p>


                {/* QR Code */}
                <div className="qr-box">

                  <img
  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    `upi://pay?pa=atharvbhosle.01@okhdfcbank&pn=JunkYard&am=${total}&cu=INR`
  )}`}
  alt="JunkYard UPI Payment QR"
/>

                </div>


                {/* Total Amount */}
                <div className="qr-total">

                  <span>Total Amount</span>

                  <strong>
                    ₹{total}
                  </strong>

                </div>


                <p className="payment-note">
                  🔒 Secure payment via QR
                </p>


                {/* Back Button */}
                <button
                  className="backCartBtn"
                  onClick={() => setShowQr(false)}
                >
                  ← Back to Cart
                </button>

              </div>

            )}

          </div>

        )}

      </div>
    </>
  )
}

export default CartSidebar