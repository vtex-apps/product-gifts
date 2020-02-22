/* eslint-disable jest/no-mocks-import */
import React, { ReactElement } from 'react'
import { render } from '@vtex/test-tools/react'

import ProductGifts from '../ProductGifts'
import ProductGiftText from '../ProductGiftText'
import ProductGiftList from '../ProductGiftList'
import ProductGiftDescription from '../ProductGiftDescription'
import ProductGiftImage from '../ProductGiftImage'
import ProductGiftName from '../ProductGiftName'
import { ProductContextProvider } from '../__mocks__/vtex.product-context/ProductContextProvider'
import { itemWithNoGifts, itemWithThreeGifts } from '../__mocks__/products'

function renderWithProductContext(
  Component: ReactElement,
  selectedItem: ProductContextItem
) {
  return render(
    <ProductContextProvider value={{ selectedItem }}>
      {Component}
    </ProductContextProvider>
  )
}

describe('ProductGifts component', () => {
  it('should not render component if product has no gifts', () => {
    const { container } = renderWithProductContext(
      <ProductGifts maxVisibleItems={3}>
        <ProductGiftText translatableText="{test} {dynamic}" />
        <ProductGiftList>
          <ProductGiftDescription />
          <ProductGiftImage />
          <ProductGiftName linkToProductPage={false} />
        </ProductGiftList>
      </ProductGifts>,
      itemWithNoGifts
    )

    expect(container.children).toHaveLength(0)
  })

  it('should render child components if product has gifts', () => {
    const { container } = renderWithProductContext(
      <ProductGifts maxVisibleItems={3}>
        <ProductGiftText translatableText="{test} {dynamic}" />
        <ProductGiftList>
          <ProductGiftDescription />
          <ProductGiftImage />
          <ProductGiftName linkToProductPage={false} />
        </ProductGiftList>
      </ProductGifts>,
      itemWithThreeGifts
    )

    expect(container.children).toHaveLength(1)
  })
})
