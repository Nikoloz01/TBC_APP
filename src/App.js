import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer'
import './App.css';
import { ProductCardContainer } from '../src/ProductCardContainer/ProductCardContainer'

function App() {
  return (
    <html>
      <head>

      </head>
      <body>

        <header>

          <Header />
        </header>

        <main>

          <ProductCardContainer />
        </main>

        <footer>
          < Footer />
        </footer>
      </body>
    </html>
  );
}

export default App;
