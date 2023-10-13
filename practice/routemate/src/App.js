import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
     {/* <h1>Hello</h1> */}
     {/* <header /> */}
     <Header/>
     <main>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/1001" element={<ProductDetail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
     </main>
     
      {/* <footer>FOOTER</footer> */}
      <Footer/>
    </div>
  );
}

export default App;
