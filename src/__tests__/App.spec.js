import { render, screen } from "@testing-library/react"
import App from "../App"

it("should render app with heading", () => {
  const { container } = render(<App />)

  // We can find heading by query selector
  const headingElementByQuerySelector = container.querySelector("h1")
  expect(headingElementByQuerySelector).toBeInTheDocument()

  // Or we can find it by role
  const headingElementByRole = screen.getByRole("heading")
  expect(headingElementByRole).toBeInTheDocument()

  // We can test the text content of the heading
  expect(headingElementByRole).toHaveTextContent("test")

  // ERROR: There is an error in the console which is caused
  // by not
})
