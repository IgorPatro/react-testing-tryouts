import React from "react"

const App = () => {
  const [number, setNumber] = React.useState(0)

  const incrementNumber = () => setNumber((prevState) => (prevState += 1))

  return (
    <div className="App">
      <h1>test</h1>
      <h3>{number}</h3>
      <button onClick={incrementNumber}>Increment</button>
    </div>
  )
}

export default App
