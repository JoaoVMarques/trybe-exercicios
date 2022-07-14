import { render, screen } from '@testing-library/react';
import App from './App';

const JOKE = {
  id: '7h3oGtrOfxc',
  joke: 'Whiteboards ... are remarkable.',
  status: 200,
}

test('Verifica que, quando recebo uma piada, mostro ela n tela', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(JOKE),
  })  

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
});
