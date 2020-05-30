import React from 'react'
import Header from 'components/Header'
import Products from 'components/Products'
import Layout from 'Layout'


class App extends React.Component {

  render() {
    return (
      <Layout>
        <Products />
      </Layout>
    )
  }
}

export default App;