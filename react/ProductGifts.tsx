import React, { FC } from 'react'
import {
  useResponsiveValue,
  MaybeResponsiveInput,
} from 'vtex.responsive-values'

import { ProductGiftsContextProvider } from './ProductGiftsContext'

interface Props {
  maxVisibleItems: MaybeResponsiveInput<number | 'showAll'>
}

const ProductGifts: FC<Props> = ({ children, maxVisibleItems = 'showAll' }) => {
  const staticMaxVisibleItems = useResponsiveValue<number | 'showAll'>(
    maxVisibleItems
  )

  return (
    <ProductGiftsContextProvider maxVisibleItems={staticMaxVisibleItems}>
      {children}
    </ProductGiftsContextProvider>
  )
}

export default ProductGifts
