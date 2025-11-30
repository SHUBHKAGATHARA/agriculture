import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Services from './pages/Services'
import Knowledge from './pages/Knowledge'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './context/ToastContext'
import { CompareProvider } from './context/CompareContext'
import ToastMessage from './components/ToastMessage'
import FloatingWhatsapp from './components/FloatingWhatsapp'
import BackToTop from './components/BackToTop'
import OfferSlider from './components/OfferSlider'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <CartProvider>
          <CompareProvider>
            <Router>
              <OfferSlider />
              <AnimatedRoutes />
              <ToastMessage />
              <FloatingWhatsapp />
              <BackToTop />
            </Router>
          </CompareProvider>
        </CartProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
