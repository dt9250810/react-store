import React from 'react'
import { withRouter } from 'react-router-dom'

class ToolBox extends React.Component {

  state = {
    searchText: ''
  };

  handleChange = e => {
    const value = e.target.value
    this.setState({
      searchText: value
    });

    this.props.search(value);
  };

  clearSearchTest = () => { 
    this.setState({ searchText: '' });
    this.props.search('');
  };

  goCart = () => {
    this.props.history.push('/cart')
  }

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
                value={this.state.searchText}
                onChange={this.handleChange}
              />
              <button className="button" onClick={this.clearSearchTest} >X</button>
            </div>
          </div>
        </div>

        <div to="/cart" className="cart-box" onClick={this.goCart} >
          <button className="button">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-num">({this.props.cartNum})</span>
          </button>
        </div>
      </div>
    );
  }

}

export default withRouter(ToolBox);