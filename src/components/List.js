import React from "react"

const List = ({ items }) => {
  return (
    <div class="custom-class">
      {items.map((item) => (
        <a key={item} href={item}>
          {item}
        </a>
      ))}
    </div>
  )
}

export default List
