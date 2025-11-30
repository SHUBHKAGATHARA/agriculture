import React from 'react'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import Layout from '../components/Layout'
import '../styles/About.css'

const About = () => {
  const stats = [
    { number: '15+', label: 'વર્ષોનો અનુભવ' },
    { number: '5000+', label: 'સંતોષી ખેડૂતો' },
    { number: '500+', label: 'પ્રોડક્ટની વિવિધતા' },
    { number: '50+', label: 'ગામોમાં સેવા' }
  ]

  const team = [
    {
      name: 'ઘનશ્યામભાઈ ઘેટિયા',
      role: 'માલિક અને સ્થાપક',
      image: '/owner-photo.png',
      description: '20+ વર્ષનો કૃષિ અનુભવ અને ખેડૂત કલ્યાણ માટે સમર્પિત'
    }
  ]

  return (
    <Layout>
      <div className="about-page">
      <div className="page-header">
        <div className="container">
          <SectionTitle>અમારા વિષે</SectionTitle>
        </div>
      </div>

      <div className="container">
        {/* Story Section */}
        <section className="about-story">
          <div className="story-content">
            <h2 className="story-title">અમારી વાર્તા</h2>
            <p className="story-text">
              રામેશ્વર એગ્રો એ ગુજરાતના ખેડૂતો માટે સમર્પિત એક વિશ્વાસપાત્ર નામ છે. 
              છેલ્લા 20 વર્ષથી અમે ઉચ્ચ ગુણવત્તાવાળા બીજ, ખાતર અને કૃષિ સાધનો 
              યોગ્ય ભાવે પૂરા પાડી રહ્યા છીએ.
            </p>
            <p className="story-text">
              અમારું ઉદ્દેશ્ય ખેડૂતને શ્રેષ્ઠ ગુણવત્તા પ્રોડક્ટ યોગ્ય ભાવમાં પહોંચાડવાનું છે. 
              અમે માત્ર પ્રોડક્ટ જ નહીં, પણ કૃષિ સંબંધિત નિષ્ણાત માર્ગદર્શન પણ આપીએ છીએ.
            </p>
            <p className="story-text">
              અમારી ટીમમાં અનુભવી કૃષિ નિષ્ણાતો છે જે તમને યોગ્ય પ્રોડક્ટ પસંદગી, 
              ડોઝ ગણતરી અને પાક વ્યવસ્થાપનમાં મદદ કરે છે. તમારી સફળતા એ અમારું ધ્યેય છે.
            </p>
          </div>
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600" 
              alt="અમારી દુકાન"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <Card key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Vision */}
        <section className="mission-vision">
          <div className="mission-vision-grid">
            <Card className="mission-card">
              <div className="mv-icon">🎯</div>
              <h3 className="mv-title">અમારું ધ્યેય</h3>
              <p className="mv-text">
                ગુજરાતના દરેક ખેડૂત સુધી શ્રેષ્ઠ ગુણવત્તાવાળા કૃષિ પ્રોડક્ટ 
                વાજબી ભાવે પહોંચાડવા અને તેમની આવકમાં વૃદ્ધિ કરવા.
              </p>
            </Card>
            <Card className="mission-card">
              <div className="mv-icon">👁️</div>
              <h3 className="mv-title">અમારી દ્રષ્ટિ</h3>
              <p className="mv-text">
                આધુનિક તકનીક અને પરંપરાગત જ્ઞાનનો ઉપયોગ કરીને ગુજરાતના 
                કૃષિ ક્ષેત્રમાં ક્રાંતિ લાવવી અને ખેડૂતોને સશક્ત બનાવવા.
              </p>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <SectionTitle>અમારી ટીમ</SectionTitle>
          <div className="team-grid">
            {team.map((member, index) => (
              <Card key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <SectionTitle>અમારા મૂલ્યો</SectionTitle>
          <div className="values-grid">
            <Card className="value-card">
              <div className="value-icon">✓</div>
              <h3 className="value-title">ગુણવત્તા</h3>
              <p className="value-text">અમે ફક્ત પ્રમાણિત અને ઉચ્ચ ગુણવત્તાવાળા પ્રોડક્ટ જ આપીએ છીએ</p>
            </Card>
            <Card className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">વિશ્વાસ</h3>
              <p className="value-text">ખેડૂતો સાથે લાંબા સમયના વિશ્વાસપાત્ર સંબંધો</p>
            </Card>
            <Card className="value-card">
              <div className="value-icon">💡</div>
              <h3 className="value-title">નવીનતા</h3>
              <p className="value-text">નવીનતમ કૃષિ તકનીક અને પ્રોડક્ટ સાથે અપડેટ</p>
            </Card>
            <Card className="value-card">
              <div className="value-icon">❤️</div>
              <h3 className="value-title">સેવા</h3>
              <p className="value-text">ખેડૂતોની સેવા અને તેમની સફળતા અમારું પ્રથમ ધ્યેય</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
    </Layout>
  )
}

export default About
