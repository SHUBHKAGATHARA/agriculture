import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import '../styles/OfferSlider.css';

const offers = [
  '🌾 ખાતર પર ૧૦% ડિસ્કાઉન્ટ – માત્ર આજ માટે!',
  '🌱 બીજ ખરીદો અને મફત ડિલિવરી મેળવો',
  '⚡ ખાસ ઓફર: ₹૧૦૦૦+ ઓર્ડર પર ફ્રી ગિફ્ટ',
  '🎁 નવા ખેડૂતો માટે ૧૫% છૂટ'
];

const OfferSlider = () => {
  const [currentOffer, setCurrentOffer] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="offer-slider"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="offer-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentOffer}
            className="offer-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {offers[currentOffer]}
          </motion.div>
        </AnimatePresence>
        <button 
          className="offer-close"
          onClick={() => setIsVisible(false)}
          aria-label="બંધ કરો"
        >
          <FaTimes />
        </button>
      </div>
      <div className="offer-dots">
        {offers.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentOffer ? 'active' : ''}`}
            onClick={() => setCurrentOffer(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OfferSlider;
