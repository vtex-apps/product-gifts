import React, { ReactElement } from 'react'
import { render } from '@vtex/test-tools/react'

import { ProductContextProvider } from './vtex.product-context/ProductContextProvider'

export function renderWithProductContext(
  Component: ReactElement,
  selectedItem: ProductContextItem
) {
  return render(
    <ProductContextProvider value={{ selectedItem }}>
      {Component}
    </ProductContextProvider>
  )
}
