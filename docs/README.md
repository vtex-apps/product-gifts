📢 Use this project, [contribute](https://github.com/vtex-apps/product-gifts) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Product Gifts

This is a block used for rendering the list of available gifts associated with a certain product in the Product Description Page (`store.product` template).

![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

## Configuration

1. Add the product-gifts app to your theme's dependencies in the `manifest.json`, for example:

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

| Prop name         | Type                        | Description                                            | Default value |
| ----------------- | --------------------------- | ------------------------------------------------------ | ------------- |
| `maxVisibleItems` | `number` &#124; `"showAll"` | Maximum number of gifts that will be displayed at once | `"showAll"`   |

Notice that this block will not work correctly outside of `store.product`.

### Default implementation

This block has a default blocks implementation which is used when `product-gifts` is used in a theme and is not configured.

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

This app exposes multiple blocks that can be used _inside_ the `product-gifts` one using the `children` array.

### gift-text

This is a block that is capable of reading information regarding the available gifts and use it to format the value of its `text` prop:

![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

| Prop name | Type     | Description                                                                                         | Default value                                                       |
| --------- | -------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `text`    | `String` | A translatable string that has variables that might be used to render any text regarding the gifts. | `"{exceedingItems, plural, =0{} one {+ # gift} other {+ # gifts}}"` |

The string received by the `text` prop has access to the following variables:

| Variable name    | Description                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| `totalGifts`     | Total number of gifts available.                                                               |
| `exceedingItems` | Number of items that were not rendered because of the maxVisibleItems prop of `product-gifts`. |
| `visibleItems`   | Number of items that are being rendered.                                                       |

### product-gift-list

This block is responsible for rendering the individual gifts as a list. It receives no props, but does receive blocks via `children`. Each block passed to it will be rendered as a gift-list item.

It also provides the necessary context to the its children that read information regarding each gift: `gift-name`, `gift-image` and `gift-description`.

### gift-name

This block is responsible for rendering the SKU name for the gift.

![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

| Prop name           | Type      | Description                                                               | Default value |
| ------------------- | --------- | ------------------------------------------------------------------------- | ------------- |
| `linkToProductPage` | `Boolean` | Whether or not the gift-name should be a link to the gift's product page. | `false`       |

### gift-image

This block is responsible for rendering the image of the gift. It can receive an image label associated to the image that should be rendered, or it will just render the first available image for the SKU by default.

![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

| Prop name    | Type                     | Description                                     | Default value |
| ------------ | ------------------------ | ----------------------------------------------- | ------------- |
| `maxWidth`   | `Number` &#124; `String` | Maximum width for the image.                    | `125`         |
| `maxHeight`  | `Number` &#124; `String` | Maximum height for the image.                   | `125`         |
| `minWidth`   | `Number` &#124; `String` | Minimum width for the image.                    | `125`         |
| `minHeight`  | `Number` &#124; `String` | Minimum height for the image.                   | `125`         |
| `imageLabel` | `String`                 | The label of the image that should be rendered. | `undefined`   |

### gift-description

This block is responsible for rendering the gift's description.

![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

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

