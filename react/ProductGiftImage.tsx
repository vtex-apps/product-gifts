import React, { FC, useContext } from 'react'
import { Image } from 'vtex.store-image'

import { GiftContext } from './components/ProductGift'

interface Props {
  maxWidth?: string | number
  maxHeight?: string | number
  minWidth?: string | number
  minHeight?: string | number
  imageIndex?: number
}

const DEFAULT_IMAGE_DIMENSIONS = 125

const ProductGiftImage: FC<Props> = ({
  maxWidth = DEFAULT_IMAGE_DIMENSIONS,
  maxHeight = DEFAULT_IMAGE_DIMENSIONS,
  minWidth = DEFAULT_IMAGE_DIMENSIONS,
  minHeight = DEFAULT_IMAGE_DIMENSIONS,
  imageIndex = 0,
}) => {
  const gift = useContext(GiftContext)
  return (
    <Image
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      minWidth={minWidth}
      minHeight={minHeight}
      src={gift?.images[imageIndex].imageUrl}
      alt={gift?.productName}
      title={gift?.skuName}
    />
  )
}

export default ProductGiftImage
