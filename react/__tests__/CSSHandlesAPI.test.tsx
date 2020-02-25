/* eslint-disable jest/no-mocks-import */
import React from 'react'

import ProductGifts from '../ProductGifts'
import ProductGiftText from '../ProductGiftText'
import ProductGiftList from '../ProductGiftList'
import ProductGiftDescription from '../ProductGiftDescription'
import ProductGiftImage from '../ProductGiftImage'
import ProductGiftName from '../ProductGiftName'
import { itemWithOneGift } from '../__mocks__/products'
import {
  renderWithProductContext,
  findCSSHandles,
} from '../__mocks__/testUtils'

const CSS_HANDLES_API = [
  'giftDescription',
  'productGiftListContainer',
  'giftNameLink',
  'giftNameText',
  'productGiftsContainer',
  'productGiftText',
  'giftListItem',
]

/**
 * It is not good practice to test the CSS and it goes against
 * the philosophy behind react-testing-library, but it is useful in our
 * case because our CSS handles are a public API.
 */
describe('CSS handles API', () => {
  it('should have all expected CSS handles', () => {
    const { container } = renderWithProductContext(
      <ProductGifts maxVisibleItems={3}>
        <ProductGiftText text="{test} {dynamic}" />
        <ProductGiftList>
          <ProductGiftDescription />
          <ProductGiftImage />
          <ProductGiftName linkToProductPage />
        </ProductGiftList>
      </ProductGifts>,
      itemWithOneGift
    )

    const foundHandles = findCSSHandles(container, CSS_HANDLES_API)
    expect(foundHandles).toEqual(CSS_HANDLES_API)
  })
})
