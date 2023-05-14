import React, { PureComponent } from 'react'

export default class ProductList extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      products : ["小米手机","小米手表","电子商务"]
    }
  }

  render() {
    return (
      <div>
        <ul>
        {
          this.state.products.map((item,index)=>{
            return (
              <li key={item}>{item}</li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}
