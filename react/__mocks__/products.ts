export const itemWithNoGifts = {
  complementName: '',
  ean: '',
  referenceId: [],
  measurementUnit: 'un',
  itemId: '1',
  name: 'Item One',
  nameComplete: 'Name One Complete',
  unitMultiplier: 1,
  videos: [],
  variations: [],
  productClusters: [],
  clusterHighlights: [],
  images: [
    {
      imageId: '1',
      imageLabel: '1-Color',
      imageTag: 'imageTag',
      imageUrl: 'imageurl.com',
      imageText: 'imageText',
    },
  ],
  sellers: [
    {
      sellerId: '1',
      sellerName: 'Store Name',
      addToCartLink: '',
      sellerDefault: '',
      commertialOffer: {
        discountHighlights: [],
        teasers: [],
        PriceValidUntil: '',
        PriceWithoutDiscount: 90,
        Tax: 0,
        CacheVersionUsedToCallCheckout: '',
        RewardValue: 0,
        AvailableQuantity: 10,
        ListPrice: 100,
        Price: 90,
      },
    },
  ],
}

export const itemWithThreeGifts = {
  complementName: '',
  ean: '',
  referenceId: [],
  measurementUnit: 'un',
  itemId: '1',
  name: 'Item One',
  nameComplete: 'Name One Complete',
  unitMultiplier: 1,
  videos: [],
  variations: [],
  productClusters: [],
  clusterHighlights: [],
  images: [
    {
      imageId: '1',
      imageLabel: '1-Color',
      imageTag: 'imageTag',
      imageUrl: 'imageurl.com',
      imageText: 'imageText',
    },
  ],
  sellers: [
    {
      sellerId: '1',
      sellerName: 'Store Name',
      addToCartLink: '',
      sellerDefault: '',
      commertialOffer: {
        discountHighlights: [],
        teasers: [],
        PriceValidUntil: '',
        PriceWithoutDiscount: 90,
        Tax: 0,
        CacheVersionUsedToCallCheckout: '',
        RewardValue: 0,
        AvailableQuantity: 10,
        ListPrice: 100,
        Price: 90,
        gifts: [
          {
            productName: 'Work Shirt Top',
            brand: 'Kawasaki',
            linkText: 'working-shirt',
            description:
              'Wanna look awesome at your work place? You should really try this ones!!Yay!yup! Cheers!!',
            skuName: 'Work Shirt Top Beige',
            images: [
              {
                imageUrl:
                  'https://storecomponents.vteximg.com.br/arquivos/ids/155476/Frame-4.jpg?v=636793808441900000',
                imageLabel: '',
                imageText: 'Frame-4',
                __typename: 'GiftImage',
              },
            ],
            __typename: 'Gift',
          },
          {
            productName: 'Work Shirt Top',
            brand: 'Kawasaki',
            linkText: 'working-shirt',
            description:
              'Wanna look awesome at your work place? You should really try this ones!!Yay!yup! Cheers!!',
            skuName: 'Work Shirt Top Verde',
            images: [
              {
                imageUrl:
                  'https://storecomponents.vteximg.com.br/arquivos/ids/155580/work-shirt_verde.jpg?v=637082282343630000',
                imageLabel: '',
                imageText: 'Frente',
                __typename: 'GiftImage',
              },
            ],
            __typename: 'Gift',
          },
          {
            productName: 'Work Shirt Top',
            brand: 'Kawasaki',
            linkText: 'working-shirt',
            description:
              'Wanna look awesome at your work place? You should really try this ones!!Yay!yup! Cheers!!',
            skuName: 'Work Shirt Top Rosa Bebê',
            images: [
              {
                imageUrl:
                  'https://storecomponents.vteximg.com.br/arquivos/ids/155581/work-shirt_rosabb.jpg?v=637082285184830000',
                imageLabel: '',
                imageText: 'Frente',
                __typename: 'GiftImage',
              },
            ],
            __typename: 'Gift',
          },
        ],
      },
    },
  ],
}
