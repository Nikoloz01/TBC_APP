import React from 'react'
import { ProductListCard } from '../productListCard/ProductListCard';
import { images } from '../img';
export const ProductCardContainer = () => {
  return (
    <div className='productCardContainer'>
        <ProductListCard width='300px'
                        border="2px solid black"
                        padding = '20px'
                        borderRadius="5px"
                        title="T-Shirt"
                        Price="79,99$"
                        Size="L"
                        imageUrl= {images['0'].imgUrl}
                        marginBottom="20px"
        />

      <ProductListCard width='300px'
        border="2px solid black"
        padding='20px'
        borderRadius="5px"
        title="Coat"
        Price="199,89$"
        Size="XL"
        imageUrl={images['1'].imgUrl}
        marginBottom="20px"

        

      />
      <ProductListCard width='300px'
        border="2px solid black"
        padding='20px'
        borderRadius="5px"
        title="Bomber Jacket"
        Price="99,89$"
        Size="s"
        imageUrl={images['2'].imgUrl}
        marginBottom="20px"

        





      />
      <ProductListCard width='300px'
        border="2px solid black"
        padding='20px'
        borderRadius="5px"
        title="Bomber Jacket"
        Price="99,59$"
        Size="S"
        imageUrl={images['3'].imgUrl}
        marginBottom="20px"






      />
      <ProductListCard width='300px'
        border="2px solid black"
        padding='20px'
        borderRadius="5px"
        
        title="Big Sale 50% Jacket"
        Price="49,99$"
        Size="M"
        imageUrl={images['4'].imgUrl}
        marginBottom="20px"



      />

      <ProductListCard width='300px'
        border="2px solid black"
        padding='20px'
        borderRadius="5px"
        title="Converse All Star"
        Price="119,89$"
        Size="M"
        imageUrl={images['5'].imgUrl}
        marginBottom="20px"
        



      />

      

    </div>
  )
}
