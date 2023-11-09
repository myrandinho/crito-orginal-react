import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Home from './components/views/Home';
import Contacts from './components/views/Contacts';
import NotFound from './components/views/NotFound';
import News from './components/views/News';
import NewsDetails from './components/views/NewsDetails';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/news' element={<News />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/news/:id" element={<NewsDetails />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
