import React from 'react'
import '../styles/SectionTitle.css'

const SectionTitle = ({ children, subtitle, centered = true }) => {
  return (
    <div className={`section-title ${centered ? 'centered' : ''}`}>
      <h2 className="title-heading">{children}</h2>
      {subtitle && <p className="title-subtitle">{subtitle}</p>}
      <div className="title-underline"></div>
    </div>
  )
}

export default SectionTitle
