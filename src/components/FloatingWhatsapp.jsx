import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/FloatingWhatsapp.css';

const FloatingWhatsapp = () => {
  const phoneNumber = '918799380134';
  const message = 'નમસ્તે, મને તમારા પ્રોડક્ટ વિશે વધુ જાણકારી જોઈએ છે.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      className="floating-whatsapp"
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="અમારો સંપર્ક કરો"
    >
      <FaWhatsapp />
      <span className="whatsapp-tooltip">અમારો સંપર્ક કરો</span>
      <span className="whatsapp-pulse"></span>
    </motion.button>
  );
};

export default FloatingWhatsapp;
