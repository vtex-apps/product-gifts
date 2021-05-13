import React from "react";
import { defineMessages } from "react-intl";
import { Link } from "vtex.render-runtime";
import { useCssHandles } from "vtex.css-handles";

import { useGift } from "./components/ProductGift";

interface Props {
  linkToProductPage: boolean;
  showProductName: boolean;
}

const CSS_HANDLES = ["giftNameLink", "giftNameText"] as const;

const ProductGiftName: StoreFunctionComponent<Props> = ({
  linkToProductPage = false,
  showProductName = false,
}) => {
  const handles = useCssHandles(CSS_HANDLES);
  const gift = useGift();

  return linkToProductPage ? (
    // No need for this rule since <Link> already creates an anchor
    // with href attribute.
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      className={`${handles.giftNameLink} c-on-base link`}
      to={`/${gift.linkText}/p`}
    >
      <span className={`${handles.giftNameText}`}>
        {showProductName ? gift.productName : gift.skuName}
      </span>
    </Link>
  ) : (
    <span className={`${handles.giftNameText} c-on-base`}>
      {showProductName ? gift.productName : gift.skuName}
    </span>
  );
};

const messages = defineMessages({
  title: {
    id: "admin/editor.gift-name.title",
    defaultMessage: "",
  },
  description: {
    id: "admin/editor.gift-name.description",
    defaultMessage: "",
  },
  linkToProduct: {
    id: "admin/editor.gift-name.linkToProduct.title",
    defaultMessage: "",
  },
  linkToProductDescription: {
    id: "admin/editor.gift-name.linkToProduct.description",
    defaultMessage: "",
  },
  showProductName: {
    id: "admin/editor.gift-name.showProductName.title",
    defaultMessage: "",
  },
  showProductNameDescription: {
    id: "admin/editor.gift-name.showProductName.description",
    defaultMessage: "",
  },
});

ProductGiftName.schema = {
  title: messages.title.id,
  description: messages.description.id,
  type: "object",
  properties: {
    linkToProduct: {
      default: false,
      title: messages.linkToProduct.id,
      description: messages.linkToProductDescription.id,
      type: "boolean",
    },
    showProductName: {
      default: false,
      title: messages.showProductName.id,
      description: messages.showProductNameDescription.id,
      type: "boolean",
    },
  },
};

export default ProductGiftName;
