import React from "react"
import Basic from "./components/Basic"
import List from "./components/List"

const App = () => {
  return (
    <div className="App">
      <h1>test</h1>
      <hr />
      <Basic />
      <hr />
      <List items={["one", "two", "three"]} />
    </div>
  )
}

export default App
