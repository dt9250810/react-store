import React, { useState, useEffect } from 'react'
import axios from 'commons/axios'
import Layout from 'Layout'
import CartItem from 'components/CartItem'
import { formatPrice } from 'commons/extensions'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Cart = () => {
  const [carts, setCarts] = useState([])

  // 每次 render 都會執行 useEffect
  useEffect(() => {
    axios.get('/carts').then(res =>
      setCarts(res.data)
    )
  }, [])

  const totalPrice = () => {
    let totalPrice = carts.map(cart => cart.mount * parseInt(cart.price))
                          .reduce((total, value) => total + value, 0)

    return totalPrice
  }

  const updateCart = cart => {
    const newCarts = [...carts]
    const _index = newCarts.findIndex(c => c.id === cart.id)
    newCarts.splice(_index, 1, cart)

    setCarts(newCarts)
  }

  const deleteCart = cart => {
    const _carts = carts.filter(c => c.id !== cart.id)
    setCarts(_carts)
  }

  return (
    <Layout>
      <div className="cart-page">
        <span className="cart-title">Shopping Cart</span>
        <div className="cart-list">
          <TransitionGroup component={null}>
            {carts.map(
                cart => (
                  <CSSTransition
                    classNames="cart-item"
                    timeout={300}
                    key={cart.id}>
                      <CartItem 
                        key={cart.id} 
                        cart={cart} 
                        updateCart={updateCart} 
                        deleteCart={deleteCart}
                      />
                  </CSSTransition>
                )
              )
            }
          </TransitionGroup>
        </div>
        {carts.length === 0 ? <p className="no-cart">NO GOODS</p> : ''}
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