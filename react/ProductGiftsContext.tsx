import React, { createContext, useContext, FC } from 'react'
import useProduct from 'vtex.product-context/useProduct'

interface Props {
  maxVisibleItems: number | 'showAll'
}

interface State extends Props {
  gifts: Gift[]
}

const GiftsStateContext = createContext<State | undefined>(undefined)

const ProductGiftsContextProvider: FC<Props> = ({
  children,
  maxVisibleItems,
}) => {
  const productContext: Maybe<ProductContextState> = useProduct()

  if (!productContext) {
    return null
  }

  const sellers = productContext?.selectedItem?.sellers
  const gifts =
    sellers?.reduce((acc: Gift[], curr) => {
      return [...acc, ...(curr.commertialOffer.gifts || [])]
    }, []) ?? []

  return (
    <GiftsStateContext.Provider value={{ gifts, maxVisibleItems }}>
      {children}
    </GiftsStateContext.Provider>
  )
}

function useProductGiftsState() {
  const context = useContext(GiftsStateContext)
  if (context === undefined) {
    throw new Error(
      'useProductGiftsState must be used within a ProductGiftsContextProvider'
    )
  }
  return context
}

export { ProductGiftsContextProvider, useProductGiftsState }
