import React, { FC } from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import { useGift } from './components/ProductGift'

interface Props {
  linkToProductPage: boolean
}

const CSS_HANDLES = ['giftNameLink', 'giftNameText'] as const

const ProductGiftName: FC<Props> = ({ linkToProductPage = false }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const gift = useGift()

  return linkToProductPage ? (
    <Link
      className={`${handles.giftNameLink} c-on-base link`}
      href={`/${gift.linkText}/p`}
    >
      <span className={`${handles.giftNameText}`}>{gift.skuName}</span>
    </Link>
  ) : (
    <span className={`${handles.giftNameText} c-on-base`}>{gift.skuName}</span>
  )
}

export default ProductGiftName
