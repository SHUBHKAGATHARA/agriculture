import React from 'react'
import { FaUserTie, FaCalculator, FaVial, FaTruck, FaWhatsapp, FaChalkboardTeacher, FaClipboardList, FaCheckCircle, FaBoxOpen, FaStar, FaRupeeSign, FaHandshake, FaPhoneAlt } from 'react-icons/fa'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import Layout from '../components/Layout'
import '../styles/Services.css'

const Services = () => {
  const services = [
    {
      icon: FaUserTie,
      title: 'કૃષિ સલાહકાર સેવા',
      description: 'અનુભવી કૃષિ નિષ્ણાતો દ્વારા મફત સલાહ અને માર્ગદર્શન',
      features: [
        'પાક પસંદગી માર્ગદર્શન',
        'જમીન અનુસાર બીજ પસંદગી',
        'પાક રોગ નિદાન',
        'કૃષિ સમસ્યા નિવારણ'
      ]
    },
    {
      icon: FaCalculator,
      title: 'ખાતરની ડોઝ ગણતરી માર્ગદર્શન',
      description: 'તમારી જમીન અને પાક અનુસાર યોગ્ય ખાતર ડોઝની ગણતરી',
      features: [
        'જમીન પ્રકાર અનુસાર ડોઝ',
        'પાક અનુસાર ખાતર યોજના',
        'ખર્ચ અસરકારક માર્ગદર્શન',
        'જૈવિક ખાતર સલાહ'
      ]
    },
    {
      icon: FaVial,
      title: 'જમીન ટેસ્ટિંગ માટે માર્ગદર્શન',
      description: 'તમારી જમીનની ટેસ્ટિંગ કરાવવા માટે સંપૂર્ણ માર્ગદર્શન',
      features: [
        'નમૂના લેવાની રીત',
        'ટેસ્ટિંગ લેબ સંપર્ક',
        'રિપોર્ટ સમજાવટ',
        'ઉપાય સૂચનો'
      ]
    },
    {
      icon: FaTruck,
      title: 'ઓર્ડર હોમ ડિલિવરી',
      description: 'તમારા ઘર અથવા ખેતર સુધી સમયસર પ્રોડક્ટ પહોંચાડવાની સેવા',
      features: [
        'ગામ સુધી ફ્રી ડિલિવરી',
        '24-48 કલાકમાં ડિલિવરી',
        'COD અને ઓનલાઈન પેમેન્ટ',
        'સુરક્ષિત પેકિંગ'
      ]
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp ઓર્ડર સેવા',
      description: 'WhatsApp દ્વારા સરળતાથી ઓર્ડર બુક કરો',
      features: [
        'ઝડપી રિસ્પોન્સ',
        'પ્રોડક્ટ માહિતી શેર',
        'ઓર્ડર ટ્રેકિંગ',
        '24x7 સપોર્ટ'
      ]
    },
    {
      icon: FaChalkboardTeacher,
      title: 'કૃષિ તાલીમ વર્કશોપ',
      description: 'આધુનિક કૃષિ તકનીકની મફત તાલીમ',
      features: [
        'માસિક વર્કશોપ',
        'પ્રેક્ટિકલ ડેમો',
        'નિષ્ણાત સ્પીકર',
        'મફત પ્રમાણપત્ર'
      ]
    }
  ]

  const workingSteps = [
    {
      step: '1',
      title: 'ઓર્ડર બુક કરો',
      description: 'ફોન, WhatsApp અથવા વેબસાઇટ દ્વારા ઓર્ડર આપો',
      icon: FaClipboardList
    },
    {
      step: '2',
      title: 'કન્ફર્મેશન મેળવો',
      description: 'અમારી ટીમ તમને કૉલ/WhatsApp કરી ઓર્ડર કન્ફર્મ કરશે',
      icon: FaCheckCircle
    },
    {
      step: '3',
      title: 'ડિલિવરી મેળવો',
      description: 'તમારા સ્થળે સમયસર પ્રોડક્ટ ડિલિવરી મેળવો',
      icon: FaBoxOpen
    }
  ]

  return (
    <Layout>
      <div className="services-page">
        <div className="page-header">
          <div className="container">
            <h1 className="page-title">અમારી સેવાઓ</h1>
            <p className="page-subtitle">તમારી ખેતી માટે સંપૂર્ણ સમાધાન</p>
          </div>
        </div>

        <div className="container">
          {/* Services Grid */}
          <section className="services-grid-section">
            <div className="services-grid">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="service-card">
                    <div className="service-icon">
                      <IconComponent />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </section>

        {/* How We Work */}
        <section className="working-process">
          <h2 className="section-heading">આપણી પ્રક્રિયા</h2>
          <p className="section-subtitle">અમે કેવી રીતે કામ કરીએ છીએ</p>
          <div className="steps-container">
            {workingSteps.map((item, index) => {
              const StepIcon = item.icon;
              return (
                <div key={index} className="step-item">
                  <Card className="step-card">
                    <div className="step-icon">
                      <StepIcon />
                    </div>
                    <div className="step-number">{item.step}</div>
                    <h3 className="step-title">{item.title}</h3>
                    <p className="step-description">{item.description}</p>
                  </Card>
                  {index < workingSteps.length - 1 && (
                    <div className="step-arrow">→</div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose">
          <h2 className="section-heading">અમને કેમ પસંદ કરો?</h2>
          <div className="choose-grid">
            <Card className="choose-card">
              <div className="choose-icon"><FaStar /></div>
              <h3 className="choose-title">પ્રમાણિત પ્રોડક્ટ</h3>
              <p className="choose-text">
                તમામ પ્રોડક્ટ સરકારી પ્રમાણિત અને લેબોરેટરી ટેસ્ટેડ
              </p>
            </Card>
            <Card className="choose-card">
              <div className="choose-icon"><FaRupeeSign /></div>
              <h3 className="choose-title">શ્રેષ્ઠ કિંમત</h3>
              <p className="choose-text">
                બજારમાં સૌથી સ્પર્ધાત્મક અને યોગ્ય ભાવ
              </p>
            </Card>
            <Card className="choose-card">
              <div className="choose-icon"><FaHandshake /></div>
              <h3 className="choose-title">વિશ્વાસપાત્ર</h3>
              <p className="choose-text">
                15+ વર્ષનો અનુભવ અને હજારો ખુશ ખેડૂતો
              </p>
            </Card>
            <Card className="choose-card">
              <div className="choose-icon"><FaPhoneAlt /></div>
              <h3 className="choose-title">24x7 સપોર્ટ</h3>
              <p className="choose-text">
                કોઈપણ સમયે ફોન કરો, અમે હંમેશા તૈયાર છીએ
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
    </Layout>
  )
}

export default Services
