/* eslint-disable jest/no-mocks-import */
import React from 'react'

import ProductGifts from '../ProductGifts'
import GiftText from '../GiftText'
import ProductGiftList from '../ProductGiftList'
import ProductGiftImage from '../ProductGiftImage'
import { itemWithThreeGifts } from '../__mocks__/products'
import { renderWithProductContext } from '../__mocks__/testUtils'

describe('ProductGiftText component', () => {
  it('should pass the correct values to IOMessage component', () => {
    const { queryByText } = renderWithProductContext(
      <ProductGifts maxVisibleItems={1}>
        <GiftText text="This is a message ID" />
        <ProductGiftList>
          <ProductGiftImage />
        </ProductGiftList>
      </ProductGifts>,
      itemWithThreeGifts
    )

    const expectedValues = {
      totalGifts: 3,
      exceedingItems: 2,
      visibleItems: 1,
    }
    const expectedId = 'This is a message ID'

    const expectedStringResult = `Received message id: ${expectedId} and the following values (totalGifts, exceedingItems, visibleItems): ${Object.values(
      expectedValues
    )}`

    expect(queryByText(expectedStringResult)).toBeDefined()
  })
})
