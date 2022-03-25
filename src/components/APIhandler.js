import React, { useEffect } from "react"
import axios from "axios"

const APIhandler = () => {
  const [title, setTitle] = React.useState("")

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => setTitle(res.data.title))
  }, [])

  return <div>{title && <h3>{title}</h3>}</div>
}

export default APIhandler
