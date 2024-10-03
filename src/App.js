import React from 'react';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer'
import './App.css';
import { ProductCardContainer } from '../src/Components/MainPage/ProductCardContainer/ProductCardContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Contact from './Components/Router-Pages/Contact/Contact';
import ProductTableAsssignments3 from './Components/Router-Pages/components-3/ProductListAssignments';
import ProfileCardContainer from './Components/Router-Pages/Profile/ProfileCardContainer';
import Blog from './Components/Router-Pages/Blog/Blog';


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
              <Route path='/ProfileCardContainer' element={<ProfileCardContainer />} />
              <Route path='/' element={<ProductCardContainer />} />
              <Route path='/Assignments3' element={<ProductTableAsssignments3 />} />
              <Route path='/Blog' element={<Blog />} />


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
