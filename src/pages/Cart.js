import React, { useState, useEffect } from 'react'
import axios from 'commons/axios'
import Layout from 'Layout'
import CartItem from 'components/CartItem'
import { formatPrice } from 'commons/extensions'

const Cart = () => {
  const [carts, setCarts] = useState([])

  // 每次 render 都會執行 useEffect
  useEffect(() => {
    axios.get('/carts').then(res =>
      setCarts(res.data)
    )
  })

  const totalPrice = () => {
    let totalPrice = carts.map(cart => cart.mount * parseInt(cart.price))
                          .reduce((total, value) => total + value, 0)

    return totalPrice
  }

  return (
    <Layout>
      <div className="cart-page">
        <span className="cart-title">Shopping Cart</span>
        <div className="cart-list">
          {
            carts.map(
              cart => <CartItem key={cart.id} cart={cart} />
            )
          }
        </div>
        <div className="cart-total">
          Total:
          <span className="total-price">
            {formatPrice(totalPrice())}
          </span>
        </div>
      </div>
    </Layout>
  )
}


export default Cart;