import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import ConfessionForm from '../components/ConfessionForm';

describe('Header Component', () => {
    it('renders the Header correctly', () => {
        render(<Header />);
        const title = screen.getByText(/Confession App/i);
        expect(title).toBeInTheDocument();
    });
});

describe('ConfessionForm Component', () => {
    it('renders the ConfessionForm correctly', () => {
        render(<ConfessionForm />);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).toBeInTheDocument();
    });
});
