import React from 'react'
import axios from 'commons/axios'
import ToolBox from 'components/ToolBox'
import Product from 'components/Product'

class Products extends React.Component {
  state = {
    products: [],
    sourceProducts: []
  };

  componentDidMount() {
    axios.get('/products')
      .then(response => {
        this.setState({ 
            products: response.data,
            sourceProducts: response.data
          })
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  search = text => {
    // 1. Get new array (products)
    let _products = [...this.state.sourceProducts] // [] means that deep clone
    
    // 2. filter result
    _products = _products.filter(p => {
      const matchArray = p.name.match(new RegExp(text, 'gi'))
      return matchArray !== null
    })

    // 3. set state
    this.setState({
      products: _products
    })
  }

  render() {
    return (
      <div>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">

            {
              this.state.products.map(p => {
                return (
                  <div className="column is-3" key={p.id}>
                    <Product product={p}/>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    )
  }
}

export default Products;