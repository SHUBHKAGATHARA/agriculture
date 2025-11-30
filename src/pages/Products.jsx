import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import Layout from '../components/Layout'
import { useCart } from '../context/CartContext'
import '../styles/Products.css'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('બધા')
  const { addToCart } = useCart()

  const categories = ['બધા', 'બીજ', 'ખાતર', 'કીટનાશક', 'સાધનો']

  const products = [
    {
      id: 1,
      name: 'હાઇબ્રિડ તુવેર બીજ',
      category: 'બીજ',
      description: 'ઉચ્ચ ઉત્પાદન આપતું પ્રમાણિત હાઇબ્રિડ તુવેરનું બીજ',
      price: 850,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400',
      tag: 'નવું',
      usage: '1 કિલો બીજ 1 એકર માટે પૂરતું. વાવણી પહેલાં જમીન સારી રીતે તૈયાર કરો.'
    },
    {
      id: 2,
      name: 'ડી.એ.પી. ખાતર',
      category: 'ખાતર',
      description: 'ડાયમોનિયમ ફોસ્ફેટ - પાક માટે આવશ્યક ફોસ્ફરસ ખાતર',
      price: 1250,
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400',
      tag: '',
      usage: 'વાવણી સમયે 50 કિલો પ્રતિ એકર આપવું. જમીનમાં સારી રીતે મિક્સ કરો.'
    },
    {
      id: 3,
      name: 'યુરિયા ખાતર',
      category: 'ખાતર',
      description: '46% નાઇટ્રોજન સામગ્રી સાથે શ્રેષ્ઠ યુરિયા ખાતર',
      price: 980,
      image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400',
      tag: 'વેચાણ પર',
      usage: 'પાક વૃદ્ધિ સમયે 2-3 વખત આપવું. 40-50 કિલો પ્રતિ એકર.'
    },
    {
      id: 4,
      name: 'કપાસ બીજ (BT)',
      category: 'બીજ',
      description: 'BT હાઇબ્રિડ કપાસ બીજ - કીડા પ્રતિરોધક',
      price: 750,
      image: 'https://images.unsplash.com/photo-1614963366763-89c829548e00?w=400',
      tag: '',
      usage: '1.5 કિલો બીજ પ્રતિ એકર. જુલાઈ-ઓગસ્ટમાં વાવવું.'
    },
    {
      id: 5,
      name: 'જૈવિક કીટનાશક',
      category: 'કીટનાશક',
      description: 'કુદરતી જૈવિક કીટનાશક - તમામ પાક માટે',
      price: 450,
      image: 'https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=400',
      tag: 'નવું',
      usage: '250ml પ્રતિ એકર. 15 દિવસે એકવાર છાંટવું.'
    },
    {
      id: 6,
      name: 'ગ્લાયફોસેટ - નીંદણ નાશક',
      category: 'કીટનાશક',
      description: 'શક્તિશાળી નીંદણ નિયંત્રણ માટે',
      price: 380,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
      tag: '',
      usage: '1.5 લિટર પ્રતિ એકર. વાવણી પહેલાં અથવા પાક બાદ વાપરો.'
    },
    {
      id: 7,
      name: 'ઘઉંનું બીજ',
      category: 'બીજ',
      description: 'LOK-1 જાતનું પ્રમાણિત ઘઉંનું બીજ',
      price: 650,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
      tag: '',
      usage: '50 કિલો પ્રતિ એકર. નવેમ્બર-ડિસેમ્બરમાં વાવવું.'
    },
    {
      id: 8,
      name: 'સ્પ્રે પંપ (16 લિટર)',
      category: 'સાધનો',
      description: 'હાઇ પ્રેશર કૃષિ સ્પ્રે પંપ',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1625827234876-621b75dfbe87?w=400',
      tag: 'નવું',
      usage: 'કીટનાશક અને ખાતર છાંટવા માટે. બેટરી સાથે આવે છે.'
    },
    {
      id: 9,
      name: 'પોટાશ ખાતર',
      category: 'ખાતર',
      description: 'મ્યુરેટ ઓફ પોટાશ - 60% K2O',
      price: 1100,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      tag: '',
      usage: 'ફૂલ-ફળ ઉત્પત્તિ સમયે 30 કિલો પ્રતિ એકર આપવું.'
    },
    {
      id: 10,
      name: 'બાજરીનું બીજ',
      category: 'બીજ',
      description: 'GHB-538 હાઇબ્રિડ બાજરીનું બીજ',
      price: 480,
      image: 'https://images.unsplash.com/photo-1593501947-188e2eb1f5d9?w=400',
      tag: 'વેચાણ પર',
      usage: '4 કિલો પ્રતિ એકર. જૂન-જુલાઈમાં વાવવું.'
    },
    {
      id: 11,
      name: 'જૈવિક ખાતર',
      category: 'ખાતર',
      description: 'કુદરતી જૈવિક ખાતર - માટી સુધારણા માટે',
      price: 350,
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400',
      tag: 'નવું',
      usage: '500 કિલો પ્રતિ એકર. વાવણી પહેલાં જમીનમાં મિક્સ કરો.'
    },
    {
      id: 12,
      name: 'કુદાળ સેટ',
      category: 'સાધનો',
      description: 'મજબૂત સ્ટીલની કુદાળ - 3 સાઇઝ',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1617940001851-e2be8ffbde67?w=400',
      tag: '',
      usage: 'હાથથી ખેતી અને નીંદણ કાઢવા માટે.'
    }
  ]

  const filteredProducts = selectedCategory === 'બધા'
    ? products
    : products.filter(p => p.category === selectedCategory)

  const handleAddToCart = (product) => {
    addToCart(product)
    alert(`${product.name} કાર્ટમાં ઉમેરાઈ!`)
  }

  return (
    <Layout>
      <div className="products-page">
      <div className="page-header">
        <div className="container">
          <SectionTitle>અમારા પ્રોડક્ટ</SectionTitle>
        </div>
      </div>

      <div className="container">
        <div className="products-layout">
          {/* Category Filter */}
          <aside className="products-sidebar">
            <h3 className="sidebar-title">કેટેગરી</h3>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-content">
            <div className="products-count">
              {filteredProducts.length} પ્રોડક્ટ મળ્યા
            </div>
            <div className="products-grid">
              {filteredProducts.map(product => (
                <Card key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {product.tag && (
                      <span className="product-tag">{product.tag}</span>
                    )}
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">₹{product.price}</div>
                    <div className="product-actions">
                      <Button
                        variant="primary"
                        size="small"
                        onClick={() => handleAddToCart(product)}
                      >
                        કાર્ટમાં ઉમેરો
                      </Button>
                      <Button variant="outline" size="small">
                        વિગત જુઓ
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Products
