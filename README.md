# Ecommer Store

Flow

User Visits the Website
Sees a list of 20 or more products pre-loaded
User is able to click on the product, clicking on the product, open up a detailed product page,
User is able to add the item to the cart, delete, increase or decrease quantity of the item
User can then proceed to checkout page and buy the product there

So I basically need these sections in my project

1. Header
   header includes, logo,
   a search bar,
   user accounts
   settings
   log in/out (dummy)
2. Hero Component to showcase some products maybe - only visual nothing interactive
3. Showcase Products of length 20 or more
4. Product Component > Product Card
5. Footer

6. Detailed Product View Page Component
7. Checkout Page component

# Data Soource: https://dummyjson.com/

# Folder Structure:

src/
│
├── assets/
│ ├── images/
│ └── icons/
│
├── data/
│ └── products.js
│
├── components/
│ ├── Header/
│ │ ├── Header.jsx
│ │ └── Header.css
│ │
│ ├── Hero/
│ │ ├── Hero.jsx
│ │ └── Hero.css
│ │
│ ├── Product/
│ │ ├── ProductCard.jsx
│ │ ├── ProductList.jsx
│ │ └── Product.css
│ │
│ ├── Footer/
│ │ ├── Footer.jsx
│ │ └── Footer.css
│ │
│ └── Cart/
│ ├── CartItem.jsx
│ ├── CartSummary.jsx
│ └── Cart.css
│
├── pages/
│ ├── Home.jsx
│ ├── ProductDetails.jsx
│ ├── Cart.jsx
│ └── Checkout.jsx
│
├── context/
│ ├── CartContext.jsx
│ └── cartReducer.js
│
├── hooks/
│ └── useLocalStorage.js (optional, later)
│
├── utils/
│ └── formatPrice.js
│
├── App.jsx
├── main.jsx
└── index.css
