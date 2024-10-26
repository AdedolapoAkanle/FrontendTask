import React from 'react'
import "../styles/globalComponents/CostumButton.css"

export const CostumButton = ({body, onClick, disabled}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
        {body}
    </button>
  )
}
