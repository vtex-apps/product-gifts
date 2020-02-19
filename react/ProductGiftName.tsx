import React, { FC, useContext } from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import { GiftContext } from './components/ProductGift'

interface Props {
  linkToProductPage: boolean
}

const CSS_HANDLES = ['giftNameLink', 'giftNameText']

const ProductGiftName: FC<Props> = ({ linkToProductPage = true }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const gift = useContext(GiftContext)

  return linkToProductPage ? (
    <Link
      className={`${handles.giftNameLink} c-on-base link`}
      href={`/${gift?.linkText}/p`}
    >
      <span className={`${handles.giftNameText}`}>{gift?.nameComplete}</span>
    </Link>
  ) : (
    <span className={`${handles.giftNameText} c-on-base`}>
      {gift?.nameComplete}
    </span>
  )
}

export default ProductGiftName
