import React, { Component } from 'react'
import products from '../data';
import Product from './Product';

class ProductList extends Component {
  render() {
    const productComponents = products.map(product => (
      <Product
        key={"product-" + product.id}
        product={product}        
      />
    ))
    return (
      <div className="ui unstackable items">
        {productComponents}
      </div>    
    )
  }
}

export default ProductList;