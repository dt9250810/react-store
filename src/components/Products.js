import React from 'react'
import axios from 'commons/axios'
import ToolBox from 'components/ToolBox'
import Product from 'components/Product'

class Products extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    // fetch('http://localhost:3001/products')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({  products: data })
    //   })
    //   .catch(err => { console.log('錯誤:', err); });
    axios.get('/products')
      .then(response => {
        console.log(response.data);
        this.setState({  products: response.data })
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  render() {
    return (
      <div>
        <ToolBox />
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