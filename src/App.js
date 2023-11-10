import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Home from './components/views/Home';
import Contacts from './components/views/Contacts';
import NotFound from './components/views/NotFound';
import News from './components/views/News';
import TestNews from './components/TestNews/TestNews';
import DetailedArticle from './components/DetailedArticle/DetailedArticle';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/news' element={<News />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/testar/:id" element={<DetailedArticle />} />
          <Route path='/testar' element={<TestNews />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
