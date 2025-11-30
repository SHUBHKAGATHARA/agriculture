# રમેશ્વર એગ્રો સેન્ટર - Premium Agriculture Shop Website

A modern, responsive agriculture/agro shop website built with React, featuring a complete UI in Gujarati language.

## 🏪 Business Information

- **Name:** Rameshwar Agro Center (રમેશ્વર એગ્રો સેન્ટર)
- **Owner:** Ghanshyam Bhai Ghetiya (ઘનશ્યામભાઈ ઘેટિયા)
- **Location:** Laxminarayan Complex, Near Government Hospital, Dhrol, Gujarat
- **Contact:** +91 87993 80134
- **Email:** kagatharashubham9@gmail.com
- **WhatsApp:** +91 87993 80134

## 🌟 Features

### Pages
- **Home** - Hero section, features, categories, customer reviews, CTA
- **Products** - Product grid with category filters, add to cart functionality
- **About Us** - Company story, team, mission, vision, values
- **Services** - Agricultural services, working process, benefits
- **Knowledge Center** - Agricultural articles and guides
- **Contact** - Contact form with validation, business information
- **Cart** - Shopping cart with quantity management

### Design Features
- ✅ All UI content in Gujarati language
- ✅ Fully responsive (mobile-first design)
- ✅ Smooth animations and transitions
- ✅ Hover effects on cards and buttons
- ✅ Sticky navbar with scroll effect
- ✅ Back to top button
- ✅ Premium green-based color palette
- ✅ Clean typography and spacing
- ✅ Card-based layouts
- ✅ Nature-inspired design

### Technical Features
- React 18 with functional components and hooks
- React Router for navigation
- Context API for cart management
- Custom reusable components
- CSS with Flexbox/Grid
- Intersection Observer for scroll animations
- Form validation

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## 🗂️ Project Structure

```
Agri/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── SectionTitle.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Knowledge.jsx
│   │   ├── Contact.jsx
│   │   └── Cart.jsx
│   ├── styles/
│   │   ├── index.css
│   │   ├── Button.css
│   │   ├── Card.css
│   │   ├── Footer.css
│   │   ├── Layout.css
│   │   ├── Navbar.css
│   │   ├── SectionTitle.css
│   │   ├── Home.css
│   │   ├── Products.css
│   │   ├── About.css
│   │   ├── Services.css
│   │   ├── Knowledge.css
│   │   ├── Contact.css
│   │   └── Cart.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Color Palette

- **Primary Green:** `#2d7a3e`
- **Primary Green Dark:** `#1e5a2e`
- **Primary Green Light:** `#4a9d5f`
- **Secondary Green:** `#7cb342`
- **Accent Green:** `#aed581`
- **Earth Brown:** `#8d6e63`
- **White/Gray Shades:** Various for backgrounds and text

## 🌐 Pages Overview

### Home (`/`)
- Hero section with CTA buttons
- Features (4 cards)
- Popular categories (4 cards)
- Customer reviews (3 testimonials)
- Call to action section

### Products (`/products`)
- Category filter sidebar
- Product grid (12 products)
- Add to cart functionality
- Product tags (નવું, વેચાણ પર)

### About (`/about`)
- Company story
- Statistics (4 stats)
- Mission & Vision
- Team members (3 cards)
- Core values (4 cards)

### Services (`/services`)
- Service cards (6 services)
- Working process (3 steps)
- Why choose us (4 reasons)

### Knowledge (`/knowledge`)
- Article grid (6 articles)
- Full article view with back navigation
- Categories: ખાતર વ્યવસ્થાપન, જંતુ નિયંત્રણ, etc.

### Contact (`/contact`)
- Contact form with validation
- Contact information
- Business hours
- Map placeholder

### Cart (`/cart`)
- Cart items with quantity controls
- Order summary
- Delivery information
- Empty cart state

## 🚀 Key Components

### Button
Props: `variant`, `size`, `onClick`, `type`, `disabled`
Variants: primary, secondary, outline
Sizes: small, medium, large

### Card
Props: `className`, `hover`
Features: Shadow on hover, rounded corners

### SectionTitle
Props: `subtitle`, `centered`
Features: Underline decoration, responsive

### Navbar
Features: Sticky, responsive hamburger menu, cart badge, scroll effect

### Footer
Features: 4-column grid, responsive, company info

## 📱 Responsive Breakpoints

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## 🎯 Target Audience

Indian farmers and agro-product buyers, especially from Gujarat.

## 💡 Usage Notes

1. All visible text is in Gujarati (Noto Sans Gujarati font)
2. Code and comments are in English
3. Images use Unsplash placeholders - replace with actual product images
4. Cart functionality is frontend-only (uses React Context)
5. Form submissions show alerts - integrate with backend as needed

## 🔧 Customization

### To change colors:
Edit CSS variables in `src/styles/index.css`

### To add products:
Edit the products array in `src/pages/Products.jsx`

### To add articles:
Edit the articles array in `src/pages/Knowledge.jsx`

### To update contact info:
Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`

## 📄 License

All rights reserved © 2025 કૃષિ દુકાન

## 🙏 Credits

- Built with React + Vite
- Icons: Unicode emojis
- Images: Unsplash (placeholders)
- Font: Noto Sans Gujarati (Google Fonts)

---

**Note:** This is a frontend-only application. For production use, integrate with a backend API for:
- Product management
- Cart persistence
- Order processing
- User authentication
- Payment gateway

---

**© 2025 રમેશ્વર એગ્રો સેન્ટર - Rameshwar Agro Center. All rights reserved.**
