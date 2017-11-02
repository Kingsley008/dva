import React from 'react';
import { connect } from 'dva';
import { Input, Button } from 'antd';
import ProductList from '../components/ProductList';


class Products extends React.Component {
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev){
    this.name = ev.target.value;
  }

  render(){
    const { onDelete, products,onAdd } = this.props;
    return (
      <div>
        <h2>List of Products</h2>
        <Input size = "large" placeholder="Add product" onInput = {this.handleInput} /><Button onClick = {()=>{onAdd(this.name)}}>Add</Button>
        <ProductList onDelete={ onDelete } products={products} />
      </div>
    );
  }
}

const mapState = (state) => {
  return{
    products:state.products
  }
};

const mapDispatch = (dispatch) => {
  return {
      onDelete: (id) => { dispatch({type:'products/onDelete', id: id})},
      onAdd:(name) => {dispatch({type:'products/onAdd', name:name })}
  }
};

// export default Products;
export default connect(mapState, mapDispatch)(Products);
