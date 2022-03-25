import { renderHook } from "@testing-library/react-hooks"
import useAPI from "../hooks/useAPI"

it("should fetch title", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAPI())

  // Check is title empty
  expect(result.current).toEqual("")

  // We wait for next update
  await waitForNextUpdate()

  // We check did the title changed
  expect(result.current).toBeTruthy()
  expect(result.current).toEqual("quis ut nam facilis et officia qui")
})
