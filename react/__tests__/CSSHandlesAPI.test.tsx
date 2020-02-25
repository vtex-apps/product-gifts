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

describe('CSS handles API', () => {
  it('should have all expected CSS handles', () => {
    const { container } = renderWithProductContext(
      <ProductGifts maxVisibleItems={3}>
        <ProductGiftText translatableText="{test} {dynamic}" />
        <ProductGiftList>
          <ProductGiftDescription />
          <ProductGiftImage />
          <ProductGiftName linkToProductPage />
        </ProductGiftList>
      </ProductGifts>,
      itemWithOneGift
    )

    const foundCSS = findCSSHandles(container, CSS_HANDLES_API)
    const foundHandles = CSS_HANDLES_API.filter(handle =>
      foundCSS.includes(handle)
    )

    expect(foundHandles).toEqual(CSS_HANDLES_API)
  })
})
