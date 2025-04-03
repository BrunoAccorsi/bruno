import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Bruno Accorsi Bergoli/i);
  expect(nameElement).toBeInTheDocument();
});
