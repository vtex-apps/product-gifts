/* eslint-disable jest/no-mocks-import */
import React from 'react'

import ProductGifts from '../ProductGifts'
import ProductGiftText from '../ProductGiftText'
import ProductGiftList from '../ProductGiftList'
import ProductGiftImage from '../ProductGiftImage'
import { itemWithOneGift } from '../__mocks__/products'
import { renderWithProductContext } from '../__mocks__/testUtils'

describe('ProductGifts component', () => {
  it('should render image with correct label', () => {
    const { queryByText } = renderWithProductContext(
      <ProductGifts maxVisibleItems={3}>
        <ProductGiftText translatableText="" />
        <ProductGiftList>
          <ProductGiftImage imageLabel="frame-2" />
        </ProductGiftList>
      </ProductGifts>,
      itemWithOneGift
    )

    expect(
      queryByText(
        'https://storecomponents.vteximg.com.br/arquivos/ids/155476/Frame-2.jpg?v=636793808441900000'
      )
    ).toBeDefined()
  })

  it('should render first available image if no label is received', () => {
    const { queryByText } = renderWithProductContext(
      <ProductGifts maxVisibleItems={3}>
        <ProductGiftText translatableText="" />
        <ProductGiftList>
          <ProductGiftImage />
        </ProductGiftList>
      </ProductGifts>,
      itemWithOneGift
    )

    expect(
      queryByText(
        'https://storecomponents.vteximg.com.br/arquivos/ids/155476/Frame-4.jpg?v=636793808441900000'
      )
    ).toBeDefined()
  })

  it('should render first available image if no image matches received label', () => {
    const { queryByText } = renderWithProductContext(
      <ProductGifts maxVisibleItems={3}>
        <ProductGiftText translatableText="" />
        <ProductGiftList>
          <ProductGiftImage imageLabel="this-is-not-a-valid-label" />
        </ProductGiftList>
      </ProductGifts>,
      itemWithOneGift
    )

    expect(
      queryByText(
        'https://storecomponents.vteximg.com.br/arquivos/ids/155476/Frame-4.jpg?v=636793808441900000'
      )
    ).toBeDefined()
  })
})
