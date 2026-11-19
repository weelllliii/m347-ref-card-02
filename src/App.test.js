import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RefCard02 homepage', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /App Ref\. Card 02/i
    })
  ).toBeInTheDocument();

  expect(
    screen.getByText(/react app \.\.\. up and running/i)
  ).toBeInTheDocument();
});