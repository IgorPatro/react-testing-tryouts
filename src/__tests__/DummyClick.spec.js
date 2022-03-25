import { render, screen, fireEvent } from "@testing-library/react"
import DummyClick from "../components/DummyClick"

it("should render and operate mocked click", () => {
  const handleClick = jest.fn()

  render(<DummyClick onClick={handleClick} title="dummy-click" />)

  const button = screen.getByTitle("dummy-click")
  expect(button).toBeInTheDocument()

  // We simulate click twice
  fireEvent.click(button)
  fireEvent.click(button)

  // We can check was our mock click called
  expect(handleClick).toHaveBeenCalledTimes(2)
})
