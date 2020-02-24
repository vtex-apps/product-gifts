import React, { FC } from 'react'
import {
  useResponsiveValue,
  MaybeResponsiveInput,
} from 'vtex.responsive-values'
import { useCssHandles } from 'vtex.css-handles'

import { ProductGiftsContextProvider } from './ProductGiftsContext'

interface Props {
  maxVisibleItems?: MaybeResponsiveInput<number | 'showAll'>
}

const CSS_HANDLES = ['productGiftsContainer'] as const

const ProductGifts: FC<Props> = ({ children, maxVisibleItems = 'showAll' }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const staticMaxVisibleItems = useResponsiveValue<number | 'showAll'>(
    maxVisibleItems
  )

  return (
    <ProductGiftsContextProvider maxVisibleItems={staticMaxVisibleItems}>
      <div className={handles.productGiftsContainer}>{children}</div>
    </ProductGiftsContextProvider>
  )
}

export default ProductGifts
