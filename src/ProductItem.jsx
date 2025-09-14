import React, { memo } from "react";

const ProductItem = memo(({ product }) => {
  console.log("Меня рендерят");

  return <li>{product.name}</li>;
});

export default ProductItem;
