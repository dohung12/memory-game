import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

describe('test click img func', () => {
  it('should increase score when click on new image', () => {
    render(<App />)

    const score = screen.getByText(/Score/i)
    const img1 = screen.getByTestId('1')
    userEvent.click(img1)
    expect(score.textContent).toBe('Score: 1')

    const img2 = screen.getByTestId('2')
    userEvent.click(img2)
    expect(score.textContent).toBe('Score: 2')
  })

  it('should reset score back to 0 when click on already being clicked', () => {
    render(<App />)

    const onClick = jest.fn()

    const score = screen.getByText(/Score/i)
    const img1 = screen.getByTestId('1')
    img1.addEventListener('click', onClick)

    userEvent.click(img1)
    userEvent.click(img1)

    expect(onClick).toHaveBeenCalledTimes(2)
    expect(score.textContent).toBe('Score: 0')
  })
})
