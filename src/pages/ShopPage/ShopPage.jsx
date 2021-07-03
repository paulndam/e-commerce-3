import React, { Component } from "react";
import ShopData from "./ShopData.js";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherSectionProps }) => (
          <CollectionPreview key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
