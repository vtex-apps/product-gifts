/* eslint-disable jest/no-mocks-import */
import React from 'react'

import ProductGifts from '../ProductGifts'
import ProductGiftList from '../ProductGiftList'
import { itemWithThreeGifts, itemWithFourGifts } from '../__mocks__/products'
import { renderWithProductContext } from '../__mocks__/testUtils'

describe('ProductGiftList component', () => {
  it('should render correct number of ProductGift components if maxVisibleItems is a number', () => {
    const { queryAllByTestId } = renderWithProductContext(
      <ProductGifts maxVisibleItems={2}>
        <ProductGiftList />
      </ProductGifts>,
      itemWithThreeGifts
    )

    expect(queryAllByTestId('giftListItem')).toHaveLength(2)
  })

  it('should render all gifts components if maxVisibleItems is equal to "showAll"', () => {
    const { queryAllByTestId } = renderWithProductContext(
      <ProductGifts maxVisibleItems="showAll">
        <ProductGiftList />
      </ProductGifts>,
      itemWithFourGifts
    )

    expect(queryAllByTestId('giftListItem')).toHaveLength(4)
  })

  it('should render all gifts components if no maxVisibleItems is received', () => {
    const { queryAllByTestId } = renderWithProductContext(
      <ProductGifts>
        <ProductGiftList />
      </ProductGifts>,
      itemWithFourGifts
    )

    expect(queryAllByTestId('giftListItem')).toHaveLength(4)
  })
})
