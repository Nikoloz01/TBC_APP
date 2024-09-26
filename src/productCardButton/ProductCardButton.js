import React from 'react'

export const ProductCardButton = ({ padding, backgroundColor, color, border, borderRadius, fontSize, cursor }) => {

  return (
    <button style={{
      padding,
      backgroundColor,
      color,
      border,
      borderRadius,
      fontSize,
      cursor,


    }}>Add to cart </button>
  )
}
