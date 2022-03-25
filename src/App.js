import React from "react"
import Basic from "./components/Basic"
import List from "./components/List"
import Counter from "./components/Counter"
import DummyClick from "./components/DummyClick"
import APIhandler from "./components/APIhandler"

const App = () => {
  return (
    <div className="App">
      <h1>test</h1>
      <hr />
      <Basic />
      <hr />
      <List items={["one", "two", "three"]} />
      <hr />
      <Counter />
      <hr />
      <DummyClick />
      <hr />
      <APIhandler />
    </div>
  )
}

export default App
