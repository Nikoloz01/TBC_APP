import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer'
import './App.css';
import { ProductCardContainer } from '../src/ProductCardContainer/ProductCardContainer'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Contact from './Components/Contact';
import ProductTableAsssignments3 from './components-3/ProductListAssignments';


function App() {
  return (
    <html>
      <head>

      </head>
      <body>
      <BrowserRouter>

        <header>

          <Header />
        </header>

        <main>

            <Routes>
              <Route path='/Contact' element={<Contact />} />
              <Route path='/' element={<ProductCardContainer />} />
              <Route path='/Assignments3' element={<ProductTableAsssignments3 />} />
                
              
            </Routes>
          
        </main>

        <footer>
          < Footer />
        </footer>
          </BrowserRouter>
      </body>
    </html>
  );
}

export default App;
