import Team from '../components/Team';

/**
 * Team Page
 * 
 * Wrapper page for the Team component.
 * 
 * Layout:
 * - Adds padding to account for fixed navbar.
 * - Renders the `Team` component.
 */
export default function TeamPage() {
    return (
        <main style={{ paddingTop: '100px' }}>
            <Team />
        </main>
    );
}
