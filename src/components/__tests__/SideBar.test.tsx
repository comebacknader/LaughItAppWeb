import * as React from 'react'
import { render, screen } from '@testing-library/react'
import SideBar from '../SideBar'

test('the SideBar contains a logo', async () => {
  render(<SideBar />)
  const logo: HTMLImageElement | any = screen.queryByRole('img')
  expect(logo).toBeInstanceOf(HTMLImageElement)
})