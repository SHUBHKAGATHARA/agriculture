import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import Layout from '../components/Layout';
import '../styles/ProductDetail.css';

// Extended product data with all details
const productData = {
  1: {
    id: 1,
    name: 'તુવેર બીજ',
    price: 850,
    originalPrice: 1000,
    discount: 15,
    category: 'બીજ',
    weight: '1 કિલો',
    rating: 4.8,
    reviews: 156,
    description: 'ઉચ્ચ ગુણવત્તાવાળા તુવેર બીજ જે તમારી ખેતીમાં શ્રેષ્ઠ ઉત્પાદન આપે છે.',
    images: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600',
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600'
    ],
    features: [
      'શુદ્ધ અને ઉચ્ચ ગુણવત્તાવાળા બીજ',
      '95% થી વધુ અંકુરણ દર',
      'રોગ પ્રતિરોધક ક્ષમતા',
      'તમામ હવામાન માટે યોગ્ય'
    ],
    farmingTips: [
      'જૂન-જુલાઈમાં વાવેતર કરો',
      'બીજની ઊંડાઈ 3-4 સેમી રાખો',
      'પંક્તિ વચ્ચે 45-60 સેમી અંતર રાખો',
      'નિયમિત પાણી આપો પણ પાણી ભરાઈ ન જાય તેનું ધ્યાન રાખો'
    ],
    nutrition: [
      'પ્રોટીન: 22-24%',
      'કાર્બોહાઈડ્રેટ: 57-60%',
      'ફાઈબર: 3-5%',
      'ખનિજો અને વિટામિન્સથી ભરપૂર'
    ]
  },
  2: {
    id: 2,
    name: 'કપાસ બીજ',
    price: 950,
    category: 'બીજ',
    weight: '1 કિલો',
    rating: 4.6,
    reviews: 98,
    description: 'ઉચ્ચ ઉત્પાદન આપતા BT કપાસ બીજ',
    images: [
      'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=600',
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600'
    ],
    features: [
      'BT ટેકનોલોજી',
      'કીડા પ્રતિરોધક',
      'વધુ ઉત્પાદન',
      'ઓછું પાણી જરૂરી'
    ],
    farmingTips: [
      'મે-જૂનમાં વાવેતર',
      'ખાતરનો યોગ્ય ઉપયોગ',
      'નિયમિત સંભાળ જરૂરી'
    ],
    nutrition: []
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    const productInfo = productData[id];
    if (productInfo) {
      setProduct(productInfo);
    }
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, image: product.images[0] });
    showToast('કાર્ટમાં સફળતાપૂર્વક ઉમેરાયું', 'success');
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  if (!product) {
    return (
      <Layout>
        <div className="product-not-found">
          <h2>પ્રોડક્ટ મળ્યું નથી</h2>
          <button onClick={() => navigate('/products')}>પાછા જાઓ</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="product-detail-page">
        <motion.div
          className="product-detail-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.images[currentImage]} alt={product.name} />
              {product.images.length > 1 && (
                <>
                  <button className="gallery-btn prev" onClick={prevImage}>
                    <FaChevronLeft />
                  </button>
                  <button className="gallery-btn next" onClick={nextImage}>
                    <FaChevronRight />
                  </button>
                </>
              )}
              {product.discount && (
                <span className="discount-badge">{product.discount}% છૂટ</span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="thumbnail-list">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className={idx === currentImage ? 'active' : ''}
                    onClick={() => setCurrentImage(idx)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-header">
              <span className="product-category">{product.category}</span>
              <div className="product-rating">
                <FaStar /> {product.rating} ({product.reviews} સમીક્ષા)
              </div>
            </div>

            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">{product.description}</p>

            <div className="product-price">
              <span className="current-price">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">₹{product.originalPrice}</span>
                  <span className="save-amount">
                    ₹{product.originalPrice - product.price} બચત
                  </span>
                </>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="quantity-section">
              <label>જથ્થો:</label>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <button className="buy-now-btn" onClick={handleAddToCart}>
              <FaShoppingCart />
              કાર્ટમાં ઉમેરો
            </button>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="product-section">
                <h3>મુખ્ય વિશેષતાઓ</h3>
                <ul className="feature-list">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          className="additional-info"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {product.farmingTips && product.farmingTips.length > 0 && (
            <div className="info-card">
              <h3>🌾 ખેતી માટેની સલાહ</h3>
              <ul>
                {product.farmingTips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {product.nutrition && product.nutrition.length > 0 && (
            <div className="info-card">
              <h3>📊 પોષણ માહિતી</h3>
              <ul>
                {product.nutrition.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
