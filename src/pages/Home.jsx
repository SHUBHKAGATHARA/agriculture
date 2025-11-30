import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaCheckCircle, FaRupeeSign, FaTruck, FaUserTie } from 'react-icons/fa';
import Layout from '../components/Layout';
import '../styles/Home.css';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: FaCheckCircle,
      title: 'ગુણવત્તાયુક્ત પ્રોડક્ટ',
      description: 'અમે ફક્ત ઉચ્ચ ગુણવત્તાવાળા અને પ્રમાણિત પ્રોડક્ટ જ પૂરા પાડીએ છીએ'
    },
    {
      icon: FaRupeeSign,
      title: 'વાજબી ભાવ',
      description: 'બજારમાં શ્રેષ્ઠ અને સ્પર્ધાત્મક કિંમતો પર પ્રોડક્ટ'
    },
    {
      icon: FaTruck,
      title: 'સમયસર ડિલિવરી',
      description: 'તમારા ઘર અથવા ખેતર સુધી સમયસર પ્રોડક્ટ પહોંચાડીએ છીએ'
    },
    {
      icon: FaUserTie,
      title: 'કૃષિ નિષ્ણાત માર્ગદર્શન',
      description: 'અનુભવી કૃષિ નિષ્ણાતો દ્વારા મફત સલાહ અને માર્ગદર્શન'
    }
  ];

  const categories = [
    {
      title: 'બીજ',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400',
      link: '/products'
    },
    {
      title: 'ખાતર',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400',
      link: '/products'
    },
    {
      title: 'કીટનાશક',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400',
      link: '/products'
    },
    {
      title: 'કૃષિ સાધનો',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400',
      link: '/products'
    }
  ];

  const reviews = [
    {
      name: 'રમેશભાઈ પટેલ',
      location: 'મહેસાણા',
      text: 'અત્યંત સારી સેવા અને ગુણવત્તાયુક્ત બીજ. મારી પાકની ઉપજ ખૂબ વધી છે. આભાર!',
      rating: 5
    },
    {
      name: 'જયેશભાઈ શાહ',
      location: 'રાજકોટ',
      text: 'વાજબી ભાવે શ્રેષ્ઠ ખાતર મળે છે. સમયસર ડિલિવરી અને સારું માર્ગદર્શન પણ મળે છે.',
      rating: 5
    },
    {
      name: 'પ્રકાશભાઈ ઠાકોર',
      location: 'સુરત',
      text: 'રામેશ્વર એગ્રો પાસેથી હંમેશા સારા પ્રોડક્ટ અને સેવા મળે છે. હું બધાને ભલામણ કરું છું.',
      rating: 5
    }
  ];

  return (
    <Layout>
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>રામેશ્વર એગ્રો</h1>
              <p>તમારી ખેતીનું વિશ્વાસુ સાથી - ગુણવત્તાયુક્ત બીજ, ખાતર અને કૃષિ સાધનો</p>
              <div className="hero-buttons">
                <Link to="/products" className="hero-btn primary">
                  હવે ખરીદી કરો
                </Link>
                <Link to="/products" className="hero-btn secondary">
                  ઓફર જુઓ
                </Link>
                <a href="tel:9824791578" className="hero-btn phone">
                  <FaPhone /> હમણાં કૉલ કરો
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <motion.section
          className="features-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="container">
            <motion.h2 {...fadeInUp} className="section-heading">
              અમારી વિશેષતાઓ
            </motion.h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Categories Section */}
        <motion.section className="categories-section" {...fadeInUp}>
          <div className="container">
            <h2 className="section-heading">પ્રોડક્ટ કેટેગરી</h2>
            <div className="categories-grid">
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  to={category.link} 
                  className="category-card-link"
                >
                  <motion.div
                    className="category-card"
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="category-image">
                      <img src={category.image} alt={category.title} />
                      <div className="category-overlay">
                        <span className="category-view">જુઓ</span>
                      </div>
                    </div>
                    <h3 className="category-title">{category.title}</h3>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section className="reviews-section" {...fadeInUp}>
          <div className="container">
            <h2 className="section-heading">ખેડૂતોના અભિપ્રાયો</h2>
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="review-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="review-stars">
                    {'⭐'.repeat(review.rating)}
                  </div>
                  <p className="review-text">{review.text}</p>
                  <div className="review-author">
                    <strong>{review.name}</strong>
                    <span className="review-location">{review.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section className="cta-section" {...fadeInUp}>
          <div className="container">
            <div className="cta-content">
              <h2>તમારી ખેતી માટે શ્રેષ્ઠ પ્રોડક્ટ મેળવો</h2>
              <p>આજે જ રામેશ્વર એગ્રો સાથે જોડાઓ અને તમારી ખેતીને નવી ઊંચાઈ આપો</p>
              <div className="cta-buttons">
                <Link to="/products" className="cta-btn primary">
                  પ્રોડક્ટ જુઓ
                </Link>
                <a
                  href="https://wa.me/919824791578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn whatsapp"
                >
                  <FaWhatsapp /> WhatsApp પર સંપર્ક કરો
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Home;
