import React, { FC, useContext } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { GiftContext } from './components/ProductGift'

const CSS_HANDLES = ['giftDescription']

const ProductGiftDescription: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const gift = useContext(GiftContext)

  return (
    <span className={`${handles.giftDescription} t-small c-muted-1`}>
      {gift?.description}
    </span>
  )
}

export default ProductGiftDescription
