import React, { FC, createContext } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { useProductGiftsState } from '../ProductGiftsContext'

interface Props {
  giftIndex: number
}

const CSS_HANDLES = ['giftListItem']

export const GiftContext = createContext<Gift | undefined>(undefined)

const ProductGift: FC<Props> = ({ giftIndex, children }) => {
  const { gifts: giftSkuInfo } = useProductGiftsState()
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <GiftContext.Provider value={giftSkuInfo[giftIndex]}>
      <div className={`${handles.giftListItem} br3 ba b--muted-3 mv2 pa5`}>
        {children}
      </div>
    </GiftContext.Provider>
  )
}

export default ProductGift
