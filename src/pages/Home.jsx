import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
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
            <Gallery />
            <div id="blogs">
                <Blog />
            </div>
        </main>
    );
}
