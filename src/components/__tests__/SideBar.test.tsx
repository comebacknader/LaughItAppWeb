import * as React from 'react'
import { render, screen } from '@testing-library/react'
import SideBar from '../SideBar'

test('the SideBar component loads', async () => {
  render(<SideBar />)
  const logo = screen.getByRole('img');
  expect(logo).toBeTruthy()
})