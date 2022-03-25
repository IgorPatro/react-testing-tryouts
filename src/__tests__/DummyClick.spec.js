import { render, screen, fireEvent } from "@testing-library/react"
import DummyClick from "../components/DummyClick"

it("should render and operate mocked click", () => {
  // Here we are using jest testing library
  // It is automatically added to the config in CRA
  // Here we are using mock features which helps us
  // to create dummy actions
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
