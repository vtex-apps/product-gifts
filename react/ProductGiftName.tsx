import React from 'react'
import { defineMessages } from 'react-intl'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import { useGift } from './components/ProductGift'

interface Props {
  linkToProductPage: boolean
}

const CSS_HANDLES = ['giftNameLink', 'giftNameText'] as const

const ProductGiftName: StoreFunctionComponent<Props> = ({
  linkToProductPage = false,
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const gift = useGift()

  return linkToProductPage ? (
    // No need for this rule since <Link> already creates an anchor
    // with href attribute.
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      className={`${handles.giftNameLink} c-on-base link`}
      to={`/${gift.linkText}/p`}
    >
      <span className={`${handles.giftNameText}`}>{gift.skuName}</span>
    </Link>
  ) : (
    <span className={`${handles.giftNameText} c-on-base`}>{gift.skuName}</span>
  )
}

const messages = defineMessages({
  title: {
    id: 'admin/editor.gift-name.title',
    defaultMessage: '',
  },
  description: {
    id: 'admin/editor.gift-name.description',
    defaultMessage: '',
  },
  linkToProduct: {
    id: 'admin/editor.gift-name.linkToProduct.title',
    defaultMessage: '',
  },
  linkToProductDescription: {
    id: 'admin/editor.gift-name.linkToProduct.description',
    defaultMessage: '',
  },
})

ProductGiftName.schema = {
  title: messages.title.id,
  description: messages.description.id,
  type: 'object',
  properties: {
    linkToProduct: {
      default: false,
      title: messages.linkToProduct.id,
      description: messages.linkToProductDescription.id,
      type: 'boolean',
    },
  },
}

export default ProductGiftName
