import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <motion.main 
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}

export default Layout
