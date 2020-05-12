import React from 'react'
import axios from 'commons/axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ToolBox from 'components/ToolBox'
import Product from 'components/Product'
import Panel from 'components/Panel'
import AddInventory from 'components/AddInventory'

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
      return !!matchArray
    })

    // 3. set state
    this.setState({
      products: _products
    })
  }

  toAdd = () => {
    Panel.open({
      component: AddInventory,
      callback: data => {
        if(data) {
          this.add(data);
        }
        console.log(data);
      }
    })
  }

  add = product => {
    const _products = [...this.state.products]
    _products.push(product)
    const _sProducts = [...this.state.sourceProducts]
    _sProducts.push(product)
    
    this.setState({
      products: _products,
      sourceProducts: _sProducts
    })
  }

  render() {
    return (
      <div>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            <TransitionGroup component={null}>
              {
                this.state.products.map(p => {
                  return (
                    <CSSTransition 
                      classNames="product-fade"
                      timeout={300}
                      key={p.id}
                    >
                      <div className="column is-3" key={p.id}>
                        <Product product={p}/>
                      </div>
                    </CSSTransition>
                  )
                })
              }
            </TransitionGroup>
          </div>
          <button className="button is-primary add-btn" onClick={this.toAdd}>add</button>
        </div>
      </div>
    )
  }
}

export default Products;