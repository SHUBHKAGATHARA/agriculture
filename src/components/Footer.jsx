import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-logo">🌾</span>
            રામેશ્વર એગ્રો
          </h3>
          <p className="footer-description">
            ખેડૂતોના વિકાસ માટે ઉચ્ચ ગુણવત્તાવાળા બીજ, ખાતર અને કૃષિ સાધનો પૂરા પાડતી શ્રેષ્ઠ દુકાન.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">ઝડપી લિંક્સ</h4>
          <ul className="footer-links">
            <li><Link to="/">હોમ</Link></li>
            <li><Link to="/products">પ્રોડક્ટ</Link></li>
            <li><Link to="/services">સેવાઓ</Link></li>
            <li><Link to="/about">અમારા વિષે</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">સંપર્ક માહિતી</h4>
          <ul className="footer-contact">
            <li>📞 +91 87993 80134</li>
            <li>📱 WhatsApp: +91 87993 80134</li>
            <li>📧 kagatharashubham9@gmail.com</li>
            <li>📍 લક્ષ્મીનારાયણ કોમ્પ્લેક્ષ, સરકારી હોસ્પિટલ પાસે, ધ્રોળ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">કામકાજના કલાકો</h4>
          <ul className="footer-hours">
            <li>સોમવાર - શનિવાર</li>
            <li>સવારે 9:00 - સાંજે 7:00</li>
            <li>રવિવાર બંધ</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} રામેશ્વર એગ્રો. તમામ હક્ક સુરક્ષિત.</p>
      </div>
    </footer>
  )
}

export default Footer
