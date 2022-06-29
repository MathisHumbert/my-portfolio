import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ProjectPage from './pages/Project';
import ScrollToTop from './components/shared/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/project/:id' element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
