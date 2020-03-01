import React from 'react'

class ToolBox extends React.Component {
  render() {
    return (
      <div className="tool-box">
        <div className="logo-text">Store</div>
        <div className="search-box">
          <div className="field has-addons">
            <div className="control">
              <input
                type="text"
                className="input search-input"
                placeholder="Search Product"
              />
              <button className="button">X</button>
            </div>
          </div>
        </div>

        <div className="cart-box">
          <button className="button">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-num">(0)</span>
          </button>
        </div>
      </div>
    );
  }

}

export default ToolBox;