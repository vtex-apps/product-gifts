📢 Use this project, [contribute](https://github.com/vtex-apps/product-gifts) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Product Gifts

The Product Gifts app provides blocks responsible for displaying, in the Product Description block, all product gifts available.

![Product Gifts default implementation](https://user-images.githubusercontent.com/27777263/75287087-84382780-57f8-11ea-99d5-704ec3456aee.png)

## Configuration

1. Add the `product-gifts` app to your theme's dependencies in the `manifest.json`, for example:

```json
"dependencies": {
  "vtex.product-gifts": "0.x"
}
```

2. Add the `product-gifts` block to your `store.product` template. For example:

```jsonc
"store.product": {
  "children": [
    "flex-layout.row#product-breadcrumb",
    "flex-layout.row#product-main",
    "flex-layout.row#description",
    "shelf.relatedProducts",
    "product-reviews",
    "product-questions-and-answers"
  ]
},

"flex-layout.row#product-main": {
  "children": ["flex-layout.col#stack", "flex-layout.col#right-col"]
},

"flex-layout.col#right-col": {
  "props": {
    "preventVerticalStretch": true,
    "rowGap": 0
  },
  "children": [
    // (...)
    "product-gifts",
  ]
}
```

**Notice:** the app must be in the product template (store.product ) in order to work properly once it is displayed along with the Product Description block.

| Prop name         | Type                        | Description                                            | Default value |
| ----------------- | --------------------------- | ------------------------------------------------------ | ------------- |
| `maxVisibleItems` | `number` &#124; `"showAll"` | Maximum number of gifts that will be displayed at once | `"showAll"`   |

### Default implementation

When declared in the `store.product` but not configured, the Product Gifts app has a default blocks implementation:

```json
{
  "product-gifts": {
    "props": {
      "maxVisibleItems": {
        "desktop": 2,
        "mobile": 1
      }
    },
    "children": ["flex-layout.row#product-gifts-text", "product-gift-list"]
  },

  "flex-layout.row#product-gifts-text": {
    "props": {
      "verticalAlign": "middle",
      "colSizing": "auto",
      "preserveLayoutOnMobile": true
    },
    "children": [
      "rich-text#product-gifts",
      "flex-layout.col#product-gifts-text"
    ]
  },
  "flex-layout.col#product-gifts-text": {
    "children": ["gift-text"],
    "props": {
      "verticalAlign": "middle"
    }
  },
  "rich-text#product-gifts": {
    "props": {
      "text": "**+ GIFT**"
    }
  },
  "gift-text": {
    "props": {
      "text": "{exceedingItems, plural, =0{} one {+ # gift} other {+ # gifts}}"
    }
  },
  "product-gift-list": {
    "children": ["flex-layout.row#gift"]
  },
  "flex-layout.row#gift": {
    "props": {
      "fullWidth": true
    },
    "children": ["flex-layout.col#gift-name-description", "gift-image"]
  },
  "flex-layout.col#gift-name-description": {
    "props": {
      "verticalAlign": "middle",
      "rowGap": 3
    },
    "children": ["gift-name", "gift-description"]
  }
}
```

## Modus Operandi

As shown above, the app exports multiple blocks that can be configured in the `product-gifts` main block through a `children` array, such as:

### Gift Text

The `gift-text` is a block responsible for reading Catalog data regarding product gifts and using it to fill out the `text` prop value.

![gift-text](https://user-images.githubusercontent.com/27777263/75287207-bb0e3d80-57f8-11ea-82aa-35da8ed87d44.png)

| Prop name | Type     | Description                                                                                         | Default value                                                       |
| --------- | -------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `text`    | `String` | A translatable string that has variables that might be used to render any text regarding the gifts. | `"{exceedingItems, plural, =0{} one {+ # gift} other {+ # gifts}}"` |

The string received by the `text` prop has access to the following variables:

| Variable name    | Description                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| `totalGifts`     | Total number of gifts available.                                                               |
| `exceedingItems` | Number of items that were not rendered because of the maxVisibleItems prop of `product-gifts`. |
| `visibleItems`   | Number of items that are being rendered.                                                       |

### Product Gift List

The `product-gift-list` is responsible for rendering the available gifts in a list format.

Although it receives no props, it is able to receive blocks through a `children` array. Each block in the array will be rendered as a gift list item.

**Notice:** the `product-gift-list` block provides the necessary context to its children regarding other gifts blocks, such as the Gift Name, Image and Description.

### Gift Name

The `gift-name` is responsible for rendering the SKU's gift name.

![gift-name](https://user-images.githubusercontent.com/27777263/75287267-d8430c00-57f8-11ea-9105-7a1f9591e12f.png)

| Prop name           | Type      | Description                                                               | Default value |
| ------------------- | --------- | ------------------------------------------------------------------------- | ------------- |
| `linkToProductPage` | `Boolean` | Whether or not the `gift-name` block should be a link to the gift's product page. | `false`       |

### Gift Image

The `gift-image` block renders the product gift image. In order to function, it can use an pre-defined image label or the first available image from the product's SKU.

![gift-image](https://user-images.githubusercontent.com/27777263/75287281-dbd69300-57f8-11ea-87b5-50cf009be522.png)

| Prop name    | Type                     | Description                                     | Default value |
| ------------ | ------------------------ | ----------------------------------------------- | ------------- |
| `maxWidth`   | `Number` &#124; `String` | Gift image maximum width.                    | `125`         |
| `maxHeight`  | `Number` &#124; `String` | Gift image maximum height.                   | `125`         |
| `minWidth`   | `Number` &#124; `String` | Gift image minimum width.                    | `125`         |
| `minHeight`  | `Number` &#124; `String` | Gift image minimum height.                   | `125`         |
| `imageLabel` | `String`                 | The label of the image that should be rendered. | `undefined`   |

### Gift Description

As the name says, the `gift-description` renders a given gift's description.

![gift-description](https://user-images.githubusercontent.com/27777263/75287368-fdd01580-57f8-11ea-9556-d91bbaec252e.png)

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

Thereafter, you should add a single column table with the available CSS handles for that block:

| CSS Handles              |
| ------------------------ |
| giftDescription          |
| giftListItem             |
| giftNameLink             |
| giftNameText             |
| productGiftListContainer |
| productGiftText          |
| productGiftsContainer    |

