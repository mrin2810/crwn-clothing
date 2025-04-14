import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from "../data/shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // Only ran this once, to add data to firestore
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
