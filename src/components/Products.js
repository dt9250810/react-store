import React from 'react'
import ToolBox from 'components/ToolBox'
import Product from 'components/Product'

class Products extends React.Component {
  products = [
    {
      name: "Air Jordan 4",
      image: "/images/1.jpg",
      tags: "92",
      price: 59440,
      status: "available"
    },
    {
      name: "Nike Paul George PG 3",
      image: "/images/2.jpg",
      tags: "25 Colors",
      price: 53800,
      status: "unavailable"
    },
    {
      name: "Jordan Why Not Zer0.2",
      image: "/images/3.jpg",
      tags: "16 Color, y",
      price: 48900,
      status: "available"
    },
    {
      name: "Nike Air Foamposite One",
      image: "/images/4.jpg",
      tags: "84 Colors",
      price: 73148,
      status: "available"
    },
    {
      name: "adidas Harden Vol.3",
      image: "/images/5.jpg",
      tags: "34 Colors",
      price: 46900,
      status: "available"
    },
    {
      name: "Nike Zoom Kobe 1",
      image: "/images/6.jpg",
      tags: "26 Colors",
      price: 80391,
      status: "available"
    },
    {
      name: "Nike Hyperdunk X(2018)",
      image: "/images/7.jpg",
      tags: "",
      price: 54600,
      status: "available"
    },
    {
      name:" Nike KD 12",
      image: "/images/8.jpg",
      tags: "",
      price: 81800,
      status: "available"
    },
    {
      name: "adidas D.O.N. Issue #1",
      price: 38800,
      status: "available",
      tags: "",
      image: "/images/9.jpg",
    },
    {
      name: "adidas D.O.N. Issue #1",
      price: 48900,
      status: "available",
      tags: "",
      image: "/images/10.jpg",
    },
    {
      name: "Nike Kyrie Flytrap",
      price: 34400,
      status: "available",
      tags: "",
      image: "/images/11.jpg",
    },
    {
      name: "Air Jordan 3",
      price: 44900,
      status: "available",
      tags: "",
      image: "/images/12.jpg",
    }
  ]

  render() {
    return (
      <div>
        <ToolBox />
        <div className="products">
          <div className="columns is-multiline is-desktop">

            {
              this.products.map(p => {
                return (
                  <div className="column is-3">
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