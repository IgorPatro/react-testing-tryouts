import { render, screen, fireEvent } from "@testing-library/react"
import App from "../App"

it("renders element with 'test' content", () => {
  render(<App />)

  const headingElement = screen.getByText(/test/i)
  expect(headingElement).toBeInTheDocument()
})

it("increments counter after click", () => {
  render(<App />)

  const buttonElement = screen.getByText(/increment/i)
  const counterElement = screen.getByText(/0/i)
  expect(buttonElement).toBeInTheDocument()
  expect(counterElement).toBeInTheDocument()

  console.log(buttonElement)

  fireEvent.click(buttonElement)
  expect(counterElement).toHaveTextContent("1")
})
