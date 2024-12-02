import React from 'react'
import "./itemListContainer.scss";
const itemListContainer = ({greeting}) => {
  return (
    <div className="item-list-container">
        {greeting}
    </div>
  )
}

export default itemListContainer