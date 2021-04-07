import * as React from 'react'
import { render, screen } from '@testing-library/react'
import PageContainer from '../PageContainer'

test('the PageContainer component', async () => {
  render(<PageContainer/>)
  const logo: HTMLDivElement | any = screen.queryByTestId('page-container')
  expect(logo).toBeInstanceOf(HTMLDivElement)
})