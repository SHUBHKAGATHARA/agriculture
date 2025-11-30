import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useCompare } from '../context/CompareContext';
import '../styles/CompareProducts.css';

const CompareProducts = ({ isOpen, onClose }) => {
  const { compareList, removeFromCompare, clearCompare } = useCompare();

  if (!isOpen) return null;

  const attributes = [
    { key: 'price', label: 'કિંમત', format: (val) => `₹${val}` },
    { key: 'category', label: 'વર્ગ' },
    { key: 'weight', label: 'વજન' },
    { key: 'rating', label: 'રેટિંગ', format: (val) => `${val} ⭐` }
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="compare-modal"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="compare-header">
          <h2>પ્રોડક્ટ સરખામણી</h2>
          <div className="compare-actions">
            <button onClick={clearCompare} className="clear-btn">
              બધા સાફ કરો
            </button>
            <button onClick={onClose} className="modal-close">
              <FaTimes />
            </button>
          </div>
        </div>

        {compareList.length === 0 ? (
          <div className="compare-empty">
            <p>સરખામણી માટે પ્રોડક્ટ ઉમેરો</p>
          </div>
        ) : (
          <div className="compare-content">
            <div className="compare-table">
              {/* Product Images Row */}
              <div className="compare-row">
                <div className="compare-label"></div>
                {compareList.map((product) => (
                  <div key={product.id} className="compare-cell product-cell">
                    <div className="product-image-wrapper">
                      <img src={product.image} alt={product.name} />
                      <button
                        className="remove-product"
                        onClick={() => removeFromCompare(product.id)}
                      >
                        <FaTimes />
                      </button>
                    </div>
                    <h3>{product.name}</h3>
                  </div>
                ))}
              </div>

              {/* Attributes Rows */}
              {attributes.map((attr) => (
                <div key={attr.key} className="compare-row">
                  <div className="compare-label">{attr.label}</div>
                  {compareList.map((product) => (
                    <div key={product.id} className="compare-cell">
                      {attr.format
                        ? attr.format(product[attr.key] || 'N/A')
                        : product[attr.key] || 'N/A'}
                    </div>
                  ))}
                </div>
              ))}

              {/* Description Row */}
              <div className="compare-row">
                <div className="compare-label">વર્ણન</div>
                {compareList.map((product) => (
                  <div key={product.id} className="compare-cell description-cell">
                    {product.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default CompareProducts;
