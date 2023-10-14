import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';
import { PageNotFound } from './components/PageNotFound';
import { ContactIn } from './components/ContactIn';
import { ContactEu } from './components/ContactEu';
import { ContactUs } from './components/ContactUs';

function App() {
  const user = true;
  const loggedIn = true;

  return (
    <div className="App">
     {/* <h1>Hello</h1> */}
     {/* <header /> */}
     <Header/>
     <main>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="products/:id" element={<ProductDetail />}></Route>
        <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
        </Route>
        {/* <Route path='/admin' element={<Navigate to='/'/>}></Route> */}
        <Route path='admin' element={user?<Admin/>: <Navigate to='/'/>}></Route>
        <Route path="*" element={<PageNotFound title="404"/>}></Route>
      </Routes>
     </main>
     
      {/* <footer>FOOTER</footer> */}
      <Footer/>
    </div>
  );
}

export default App;
