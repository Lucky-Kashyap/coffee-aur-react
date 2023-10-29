import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import JokePage from './pages/JokePage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className='image'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='joke' element={<JokePage />}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
