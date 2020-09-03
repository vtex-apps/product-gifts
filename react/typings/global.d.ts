import { FunctionComponent } from 'react'

declare global {
  interface StoreFunctionComponent<P = Record<string, unknown>>
    extends FunctionComponent<P> {
    schema?: Record<string, unknown>
    getSchema?(props?: P): Record<string, unknown>
  }

  interface Gift {
    productName: string
    brand: string
    linkText: string
    description: string
    skuName: string
    images: GiftImage[]
  }

  interface GiftImage {
    imageUrl: string
    imageLabel: string
    imageText: string
  }

  interface ProductGiftsQueryResponse {
    product: {
      items: ProductGiftsQueryResponseItem[]
    }
  }

  interface ProductGiftsQueryResponseItem {
    itemId: string
    sellers: ProductGiftsQueryResponseSeller[]
  }

  interface ProductGiftsQueryResponseSeller {
    commertialOffer: {
      gifts: Gift[]
    }
  }
}
