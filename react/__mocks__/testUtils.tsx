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

export function findCSSHandles(container: HTMLElement, handles: string[]) {
  const foundNodes = handles
    .map(handle => {
      const foundNodesInner = container.querySelectorAll(`.${handle}`)
      let classes = ''
      foundNodesInner.forEach(node => {
        classes = classes.concat(node.classList.value)
      })

      return classes
    })
    .reduce((acc, curr) => `${acc} ${curr}`)

  return foundNodes
}
