import React, { createContext, useContext, FC, useMemo } from 'react'
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
  const selectedItemFromContext = productContext?.selectedItem

  const giftsMemoized = useMemo(() => {
    const sellers = selectedItemFromContext?.sellers ?? []
    const gifts =
      sellers?.reduce((acc: Gift[], curr) => {
        acc.push(...(curr.commertialOffer.gifts || []))
        return acc
      }, []) ?? []

    return gifts
  }, [selectedItemFromContext])

  if (!productContext || giftsMemoized.length === 0) {
    return null
  }

  return (
    <GiftsStateContext.Provider
      value={{ gifts: giftsMemoized, maxVisibleItems }}
    >
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
