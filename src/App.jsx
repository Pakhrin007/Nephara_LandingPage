import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/index';
import Pricing from './navbar/Pages/Pricing';
import LandingPage from './landing-page';
import Blog from './navbar/Pages/Blog';
import BlogDetail from './navbar/Pages/Blog/blog-details';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
