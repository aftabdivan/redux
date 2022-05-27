import React from "react";

function Home(props) {
    console.warn("Home",props.data);
  return (
    <div>
        {/* <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
            <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-vector-add-to-cart-vector-icon-png-image_321034.jpg"/>
        </div> */}
      <h1 className="home">Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ price: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
          <button
          className="remove-cart-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove TO Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
