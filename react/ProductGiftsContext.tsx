import React, { createContext, useContext, FC, useMemo } from 'react'
import useProduct from 'vtex.product-context/useProduct'

interface Props {
  maxVisibleItems: number | 'showAll'
}

interface State extends Props {
  gifts: Gift[]
}

const GiftsStateContext = createContext<State>({
  gifts: [],
  maxVisibleItems: 0,
})

const ProductGiftsContextProvider: FC<Props> = ({
  children,
  maxVisibleItems,
}) => {
  const productContext: Maybe<ProductContextState> = useProduct()
  const selectedItemFromContext = productContext?.selectedItem

  const sellers = selectedItemFromContext?.sellers ?? []
  const gifts =
    sellers?.reduce((acc: Gift[], curr) => {
      acc.push(...(curr.commertialOffer.gifts || []))
      return acc
    }, []) ?? []

  const state = useMemo(() => ({ gifts, maxVisibleItems }), [
    gifts,
    maxVisibleItems,
  ])

  if (!productContext || state.gifts.length === 0) {
    return null
  }

  return (
    <GiftsStateContext.Provider value={state}>
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
