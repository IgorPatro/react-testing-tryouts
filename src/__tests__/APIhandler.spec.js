import { render, screen, waitFor } from "@testing-library/react"
import APIhandler from "../components/APIhandler"

it("should get data and display it", async () => {
  render(<APIhandler />)

  // There is no heading in the document at the component render
  expect(screen.queryByRole("heading")).not.toBeInTheDocument()

  // We are waiting for data to fetch and render heading
  const heading = await waitFor(() => screen.findByRole("heading"))

  expect(heading).toBeInTheDocument()
})
