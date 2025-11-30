import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import '../styles/ProductQuickView.css';

const ProductQuickView = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    showToast('કાર્ટમાં સફળતાપૂર્વક ઉમેરાયું', 'success');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="quick-view-modal"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>

            <div className="quick-view-content">
              <div className="quick-view-image">
                <img src={product.image} alt={product.name} />
                {product.discount && (
                  <span className="quick-view-badge">
                    {product.discount}% છૂટ
                  </span>
                )}
              </div>

              <div className="quick-view-details">
                <span className="quick-view-category">{product.category}</span>
                <h2 className="quick-view-title">{product.name}</h2>
                <p className="quick-view-description">{product.description}</p>

                <div className="quick-view-price">
                  <span className="current-price">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">₹{product.originalPrice}</span>
                  )}
                </div>

                {product.features && (
                  <div className="quick-view-features">
                    <h4>વિશેષતાઓ:</h4>
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="quick-view-quantity">
                  <label>જથ્થો:</label>
                  <div className="quantity-selector">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <FaMinus />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  <FaShoppingCart />
                  કાર્ટમાં ઉમેરો
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductQuickView;
