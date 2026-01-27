import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Approach from './Approach';

describe('Approach Component', () => {
  it('renders all 4 steps', () => {
    render(<Approach />);
    expect(screen.getByText(/Discovery & Strategy/i)).toBeInTheDocument();
    expect(screen.getByText(/Conceptual Design/i)).toBeInTheDocument();
    expect(screen.getByText(/Technical Resolution/i)).toBeInTheDocument();
    expect(screen.getByText(/Construction Oversight/i)).toBeInTheDocument();
  });

  it('displays the correct step numbers', () => {
    render(<Approach />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });
});
