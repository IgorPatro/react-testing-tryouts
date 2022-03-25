import { render } from "@testing-library/react"
import Basic from "../components/Basic"

it("should render the most basic react component with text content", () => {
  const { getByRole } = render(<Basic />)

  // We can destruct queries from render function or take them
  // from the screen global object
  const divElement = getByRole("contentinfo")

  // We can use regular expressions
  expect(divElement).toHaveTextContent(/basics/i)
  expect(divElement).toHaveAttribute("role", "contentinfo")

  // Negation
  expect(divElement).not.toHaveAttribute("role", "other-role")
})
