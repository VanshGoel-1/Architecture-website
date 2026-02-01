import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Approach from '../components/Approach';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Blog from '../components/Blog';

/**
 * Home Page
 * 
 * Landing page component.
 * 
 * Composition:
 * - Stacks multiple sections: Hero, Projects, Services, Approach, Gallery, Testimonials, Contact, Blog.
 * - Uses `id` attributes for hash navigation matching the Navbar links.
 */
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
            <div id="testimonials">
                <Testimonials />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <div id="blogs">
                <Blog />
            </div>
        </main>
    );
}
