import React from "react"

const Counter = () => {
  const [counter, setCounter] = React.useState(0)

  return (
    <div>
      <p>Counter state: {counter}</p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Counter
