import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import Layout from '../components/Layout'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'નામ જરૂરી છે'
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'મોબાઇલ નંબર જરૂરી છે'
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'યોગ્ય 10 અંકનો મોબાઇલ નંબર દાખલ કરો'
    }

    if (!formData.city.trim()) {
      newErrors.city = 'ગામ/શહેર જરૂરી છે'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'સંદેશ જરૂરી છે'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      console.log('Form submitted:', formData)
      setSubmitted(true)
      // Reset form
      setFormData({
        name: '',
        mobile: '',
        city: '',
        message: ''
      })
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <Layout>
      <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <SectionTitle>અમારો સંપર્ક કરો</SectionTitle>
        </div>
      </div>

      <div className="container">
        <div className="contact-intro">
          <p className="intro-text">
            ઓર્ડર, પૂછપરછ અથવા કૃષિ માર્ગદર્શન માટે નીચેનો ફોર્મ ભરો અથવા સીધા અમને કૉલ કરો.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Form */}
          <div className="contact-form-section">
            <Card>
              <h2 className="form-title">સંદેશ મોકલો</h2>
              {submitted && (
                <div className="success-message">
                  ✓ તમારો સંદેશ સફળતાપૂર્વક મોકલાયો છે. અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">નામ *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="તમારું નામ દાખલ કરો"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">મોબાઇલ નંબર *</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10 અંકનો મોબાઇલ નંબર"
                    maxLength="10"
                    className={errors.mobile ? 'error' : ''}
                  />
                  {errors.mobile && <span className="error-text">{errors.mobile}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="city">ગામ / શહેર *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="તમારું ગામ અથવા શહેર"
                    className={errors.city ? 'error' : ''}
                  />
                  {errors.city && <span className="error-text">{errors.city}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">સંદેશ *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="તમારો સંદેશ અથવા પૂછપરછ લખો"
                    rows="5"
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <Button type="submit" size="large" className="submit-btn">
                  સંદેશ મોકલો
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <Card className="info-card">
              <h3 className="info-title">સંપર્ક માહિતી</h3>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <strong>ફોન નંબર</strong>
                  <p>+91 87993 80134</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📱</div>
                <div className="info-details">
                  <strong>WhatsApp</strong>
                  <p>+91 87993 80134</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-details">
                  <strong>ઈમેઈલ</strong>
                  <p>kagatharashubham9@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <strong>સરનામું</strong>
                  <p>લક્ષ્મીનારાયણ કોમ્પ્લેક્ષ,<br />સરકારી હોસ્પિટલ પાસે, ધ્રોળ<br />ગુજરાત, ભારત</p>
                </div>
              </div>
            </Card>

            <Card className="hours-card">
              <h3 className="info-title">કામકાજના કલાકો</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>સોમવાર - શનિવાર</span>
                  <span>સવારે 9:00 - સાંજે 7:00</span>
                </div>
                <div className="hours-item">
                  <span>રવિવાર</span>
                  <span className="closed">બંધ</span>
                </div>
                <div className="hours-item">
                  <span>તહેવારો</span>
                  <span className="closed">બંધ</span>
                </div>
              </div>
            </Card>

            <Card className="visit-card">
              <h3 className="info-title">અમારી મુલાકાત લો</h3>
              <p className="visit-text">
                અમારી દુકાને આવીને પ્રોડક્ટ જાતે જુઓ અને અમારા નિષ્ણાતો સાથે વાત કરો. 
                અમે તમારી સેવા માટે તૈયાર છીએ!
              </p>
              <div className="visit-features">
                <div className="visit-feature">✓ ફ્રી પાર્કિંગ</div>
                <div className="visit-feature">✓ મફત સલાહ</div>
                <div className="visit-feature">✓ ઘરેલુ ડિલિવરી</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Map Section (Optional) */}
        <section className="map-section">
          <Card>
            <h3 className="map-title">અમારું સ્થાન</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117623.99999999999!2d70.4167!3d22.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950594e5dc6e6e7%3A0x8b5e5e5e5e5e5e5e!2sDhrol%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 'var(--border-radius)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rameshwar Agro Center Location"
              ></iframe>
              <p className="map-address">લક્ષ્મીનારાયણ કોમ્પ્લેક્ષ, સરકારી હોસ્પિટલ પાસે, ધ્રોળ, ગુજરાત</p>
            </div>
          </Card>
        </section>
      </div>
    </div>
    </Layout>
  )
}

export default Contact
