import React from 'react';
import { render } from '@testing-library/react';
import Head from './head';

test('renders learn react link', () => {
  const { getByText } = render(<Head />);
  const linkElement = getByText(/anyscale/i);
  expect(linkElement).toBeInTheDocument();
});
