import React, { FC } from 'react'
import { Image } from 'vtex.store-image'

import { useGift } from './components/ProductGift'

interface Props {
  maxWidth?: string | number
  maxHeight?: string | number
  minWidth?: string | number
  minHeight?: string | number
  imageLabel?: string
}

const DEFAULT_IMAGE_DIMENSIONS = 125

const ProductGiftImage: FC<Props> = ({
  maxWidth = DEFAULT_IMAGE_DIMENSIONS,
  maxHeight = DEFAULT_IMAGE_DIMENSIONS,
  minWidth = DEFAULT_IMAGE_DIMENSIONS,
  minHeight = DEFAULT_IMAGE_DIMENSIONS,
  imageLabel,
}) => {
  const gift = useGift()
  const productImage =
    gift.images.find(image => image.imageLabel === imageLabel) ?? gift.images[0]

  return (
    <Image
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      minWidth={minWidth}
      minHeight={minHeight}
      src={productImage.imageUrl}
      alt={gift.productName}
      title={gift.skuName}
    />
  )
}

export default ProductGiftImage
