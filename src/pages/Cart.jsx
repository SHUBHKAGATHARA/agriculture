import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import Layout from '../components/Layout'
import { useCart } from '../context/CartContext'
import '../styles/Cart.css'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleRemove = (productId, productName) => {
    if (window.confirm(`શું તમે ${productName} ને કાર્ટમાંથી દૂર કરવા માંગો છો?`)) {
      removeFromCart(productId)
    }
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('તમારી કાર્ટ ખાલી છે!')
      return
    }
    alert('ઓર્ડર કન્ફર્મેશન માટે અમે તમને ટૂંક સમયમાં કૉલ કરીશું. આભાર!')
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="page-header">
          <div className="container">
            <SectionTitle>તમારી કાર્ટ</SectionTitle>
          </div>
        </div>

        <div className="container">
          <div className="empty-cart">
            <Card className="empty-cart-card">
              <div className="empty-icon">🛒</div>
              <h2 className="empty-title">તમારી કાર્ટ ખાલી છે</h2>
              <p className="empty-text">
                તમે હજુ સુધી કોઈ પ્રોડક્ટ કાર્ટમાં ઉમેર્યા નથી.
              </p>
              <Link to="/products">
                <Button size="large">પ્રોડક્ટ જુઓ</Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className="cart-page">
      <div className="page-header">
        <div className="container">
          <SectionTitle>તમારી કાર્ટ</SectionTitle>
        </div>
      </div>

      <div className="container">
        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items-section">
            <Card>
              <div className="cart-items-header">
                <h3>પ્રોડક્ટ વિગતો</h3>
                <span>{cartItems.length} પ્રોડક્ટ</span>
              </div>
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-description">{item.description}</p>
                      <p className="item-price">₹{item.price} / એકમ</p>
                    </div>
                    <div className="item-quantity">
                      <label>જથ્થો:</label>
                      <div className="quantity-controls">
                        <button
                          className="qty-btn"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="item-total">
                      <strong>₹{item.price * item.quantity}</strong>
                    </div>
                    <button
                      className="item-remove"
                      onClick={() => handleRemove(item.id, item.name)}
                      title="દૂર કરો"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Cart Summary */}
          <div className="cart-summary-section">
            <Card className="summary-card">
              <h3 className="summary-title">ઓર્ડર સમરી</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>કુલ પ્રોડક્ટ:</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="summary-row">
                  <span>કુલ જથ્થો:</span>
                  <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="summary-row">
                  <span>સબ ટોટલ:</span>
                  <span>₹{getCartTotal()}</span>
                </div>
                <div className="summary-row">
                  <span>ડિલિવરી ચાર્જ:</span>
                  <span className="free">ફ્રી</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total-row">
                  <strong>કુલ રકમ:</strong>
                  <strong className="total-amount">₹{getCartTotal()}</strong>
                </div>
              </div>

              <div className="summary-actions">
                <Button 
                  size="large" 
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  ઓર્ડર કન્ફર્મ કરો
                </Button>
                <Link to="/products">
                  <Button variant="outline" size="large">
                    ખરીદી ચાલુ રાખો
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="delivery-info">
              <h4 className="info-title">ડિલિવરી માહિતી</h4>
              <ul className="info-list">
                <li>✓ ફ્રી હોમ ડિલિવરી</li>
                <li>✓ 24-48 કલાકમાં ડિલિવરી</li>
                <li>✓ COD ઉપલબ્ધ</li>
                <li>✓ સુરક્ષિત પેકિંગ</li>
              </ul>
            </Card>

            <Card className="support-info">
              <h4 className="info-title">મદદ જોઈએ?</h4>
              <p className="support-text">અમને કૉલ કરો:</p>
              <p className="support-number">📞 +91 98247 91578</p>
              <p className="support-text">WhatsApp:</p>
              <p className="support-number">📱 +91 98247 91578</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Cart
