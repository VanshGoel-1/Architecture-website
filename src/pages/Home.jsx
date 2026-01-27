import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Approach from '../components/Approach';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="approach">
        <Approach />
      </div>
      <Gallery />
      <div id="blogs">
        <Blog />
      </div>
    </main>
  );
}
