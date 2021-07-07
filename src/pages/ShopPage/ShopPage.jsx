import React from "react";

import CollectionsOverView from "../../components/CollectionsOverView/CollectionsOverView";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverView />
    </div>
  );
};

export default ShopPage;
