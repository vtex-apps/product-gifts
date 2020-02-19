import React, {
  createContext,
  useState,
  useContext,
  FC,
  useEffect,
} from 'react'
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
  const [state, setState] = useState<State>({ gifts: [], maxVisibleItems })

  useEffect(() => {
    const sellers = productContext?.selectedItem?.sellers
    const gifts =
      sellers?.reduce((acc: Gift[], curr) => {
        return [...acc, ...(curr.commertialOffer.gifts || [])]
      }, []) ?? []
    setState(currState => ({ ...currState, gifts }))
  }, [state, productContext])

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
