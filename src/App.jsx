import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import ProjectsPage from './pages/Projects';
import TeamPage from './pages/Team';
import BlogPage from './pages/Blog';

/**
 * App Component
 * 
 * Top-level application component that sets up routing and global layout structure.
 * 
 * - Wraps the app in `BrowserRouter`.
 * - Renders global `Navbar` and `Footer`.
 * - Defines all application routes.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
