import axios from "axios"
import React from "react"

const useAPI = () => {
  const [title, setTitle] = React.useState("")

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/2")
      .then((res) => setTitle(res.data.title))
  }, [])

  return title
}

export default useAPI
