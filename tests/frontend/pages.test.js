import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SubmitPage from '../pages/SubmitPage';

describe('HomePage', () => {
    it('renders the HomePage correctly', () => {
        render(
            <Router>
                <HomePage />
            </Router>
        );
        const heading = screen.getByText(/Recent Confessions/i);
        expect(heading).toBeInTheDocument();
    });
});

describe('SubmitPage', () => {
    it('renders the SubmitPage correctly', () => {
        render(
            <Router>
                <SubmitPage />
            </Router>
        );
        const formHeading = screen.getByText(/Submit Your Confession/i);
        expect(formHeading).toBeInTheDocument();
    });
});
