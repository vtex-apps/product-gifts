import React, { useMemo } from 'react'
import { IOMessage } from 'vtex.native-types'
import { useCssHandles } from 'vtex.css-handles'

import { useProductGiftsState } from './ProductGiftsContext'

interface Props {
  translatableText?: string
}

const CSS_HANDLES = ['productGiftText'] as const

const ProductGiftText: StoreFunctionComponent<Props> = ({
  translatableText,
}) => {
  const { gifts, maxVisibleItems } = useProductGiftsState()
  const handles = useCssHandles(CSS_HANDLES)
  const resolvedMaxVisibleItems =
    maxVisibleItems === 'showAll' ? gifts.length : maxVisibleItems

  const values = useMemo(
    () => ({
      totalGifts: gifts.length,
      exceedingItems:
        gifts.length - resolvedMaxVisibleItems > 0
          ? gifts.length - resolvedMaxVisibleItems
          : 0,
      visibleItems:
        resolvedMaxVisibleItems > gifts.length
          ? gifts.length
          : resolvedMaxVisibleItems,
    }),
    [gifts.length, resolvedMaxVisibleItems]
  )

  return (
    <span className={handles.productGiftText}>
      <IOMessage id={translatableText} values={values} />
    </span>
  )
}

ProductGiftText.schema = {
  title: 'ProductGifts',
  description: 'A test, for now.',
  type: 'Object',
}

export default ProductGiftText
