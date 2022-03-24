import { render, screen } from "@testing-library/react"
import App from "../App"

it("renders 'test' heading", () => {
  render(<App />)
  const headingElement = screen.getByText(/test/i)
  expect(headingElement).toBeInTheDocument()
})
