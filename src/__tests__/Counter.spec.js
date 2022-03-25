import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "../components/Counter"

// We can group tests by using describe
describe("counter", () => {
  it("should render counter", () => {
    render(<Counter />)
    const counter = screen.getByText(/counter/i)
    const button = screen.getByText(/increment/i)

    expect(counter).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it("should operate incrementation", () => {
    render(<Counter />)
    const counter = screen.getByText(/counter/i)
    const button = screen.getByText(/increment/i)

    // Check initial counter state
    expect(counter).toHaveTextContent(/0/i)

    // Simulate button click
    fireEvent.click(button)

    // Check counter state
    expect(counter).toHaveTextContent(/1/i)
  })
})
