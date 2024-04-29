import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import HelloWorld from '../src/components/hello-world';

test('App Router: Works with Server Components', () => {
  render(<HelloWorld />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'App Router' })
  ).toBeDefined();
});
