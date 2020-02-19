import React from 'react'
import { IOMessage } from 'vtex.native-types'
import { useCssHandles } from 'vtex.css-handles'

import { useProductGiftsState } from './ProductGiftsContext'

interface Props {
  translatableText: string
}

const CSS_HANDLES = ['productGiftText']

const ProductGiftText: StorefrontFunctionComponent<Props> = ({
  translatableText,
}) => {
  const { gifts, maxVisibleItems } = useProductGiftsState()
  const handles = useCssHandles(CSS_HANDLES)
  const resolvedMaxVisibleItems =
    maxVisibleItems === 'showAll' ? gifts.length : maxVisibleItems

  const values = {
    totalGifts: gifts.length,
    exceedingItems:
      gifts.length - resolvedMaxVisibleItems > 0
        ? gifts.length - resolvedMaxVisibleItems
        : 0,
    visibleItems:
      resolvedMaxVisibleItems > gifts.length
        ? gifts.length
        : resolvedMaxVisibleItems,
  }

  return (
    <IOMessage id={translatableText} values={values}>
      {(message: string) => (
        <span className={handles.productGiftText}>{message}</span>
      )}
    </IOMessage>
  )
}

ProductGiftText.schema = {
  title: 'ProductGifts',
  description: 'A test, for now.',
  type: 'Object',
}

export default ProductGiftText
