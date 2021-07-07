import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../Redux/Shop/shopSelector";
// import ShopData from "../../Redux/Shop/ShopData.js";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherSectionProps }) => (
        <CollectionPreview key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
