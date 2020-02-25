import React from 'react'
import { defineMessages } from 'react-intl'
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

const ProductGifts: StoreFunctionComponent<Props> = ({
  children,
  maxVisibleItems = 'showAll',
}) => {
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

const messages = defineMessages({
  title: {
    id: 'admin/editor.product-gifts.title',
    defaultMessage: '',
  },
  description: {
    id: 'admin/editor.product-gifts.description',
    defaultMessage: '',
  },
  maxVisibleItems: {
    id: 'admin/editor.product-gifts.maxVisibleItems.title',
    defaultMessage: '',
  },
  maxVisibleItemsDescription: {
    id: 'admin/editor.product-gifts.maxVisibleItems.description',
    defaultMessage: '',
  },
})

ProductGifts.schema = {
  title: messages.title.id,
  description: messages.description.id,
  type: 'object',
  properties: {
    maxVisibleItems: {
      default: 'showAll',
      title: messages.maxVisibleItems.id,
      description: messages.maxVisibleItemsDescription.id,
      type: 'string',
    },
  },
}

export default ProductGifts
