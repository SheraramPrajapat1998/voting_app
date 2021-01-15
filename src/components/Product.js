import React, { Component } from 'react'

class Product extends Component {
  render() {
    const { productImageUrl, votes, title, url, description, submitterAvatarUrl } = this.props.product;

    return (
      <div className="item">
        <div className="image">
          <img src={productImageUrl} alt={title} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a>
              <i className="large caret up icon" />
            </a>            
            {votes}
          </div>
          <div className="description">
            <a href={url}>
              {title}
            </a>
            <p>
              {description}
            </p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              className="ui avatar image"
              src={submitterAvatarUrl}
            />
          </div>
        </div>
      </div>     
    )
  }
}

export default Product;