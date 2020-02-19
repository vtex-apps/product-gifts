import React, { FC } from 'react'

import { ProductGiftsContextProvider } from './ProductGiftsContext'

interface Props {
  maxVisibleItems: number | 'showAll'
}

const ProductGifts: FC<Props> = ({ children, maxVisibleItems = 'showAll' }) => {
  return (
    <ProductGiftsContextProvider maxVisibleItems={maxVisibleItems}>
      {children}
    </ProductGiftsContextProvider>
  )
}

export default ProductGifts
