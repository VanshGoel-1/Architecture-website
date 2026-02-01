import Blog from '../components/Blog';

/**
 * Blog Page
 * 
 * Wrapper page for the Blog component.
 * 
 * Layout:
 * - Adds padding to account for fixed navbar.
 * - Renders the `Blog` component.
 */
export default function BlogPage() {
    return (
        <main style={{ paddingTop: '100px' }}>
            <Blog />
        </main>
    );
}
