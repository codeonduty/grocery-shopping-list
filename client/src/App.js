// App.js --- React application

// Code:

// Libraries
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Modules
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import CataloguePage from './component/Page/Catalogue/Catalogue';
import ItemPage from './component/Page/Item/Item';
import SignInPage from './component/Page/SignIn/SignIn';
import SignUpPage from './component/Page/SignUp/SignUp';
import ListPage from './component/Page/List/List';

// Component
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<CataloguePage />} />
            <Route path='/item/catalogue' element={<CataloguePage />} />
            <Route path='/item/:id' element={<ItemPage />} />
            <Route path='/shopper/signin' element={<SignInPage />} />
            <Route path='/shopper/signup' element={<SignUpPage />} />
            <Route path='/shopper/list' element={<ListPage />} />
            <Route path='/shopper/list/:id' element={<ListPage />} />
            <Route path='/shopper/list/:id/:quantity' element={<ListPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

// App.js ends here
