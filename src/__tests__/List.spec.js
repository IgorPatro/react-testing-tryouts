import { render } from "@testing-library/react"
import List from "../components/List"

it("should render list of links", () => {
  const items = ["banana", "apple", "orange"]
  const { container } = render(<List items={items} />)

  const anchorElements = container.querySelectorAll("a")

  // We check are all 3 items rendered
  expect(anchorElements.length).toEqual(3)
  expect(anchorElements[0]).toHaveTextContent(items[0])
  expect(anchorElements[1]).toHaveAttribute("href", items[1])
})
