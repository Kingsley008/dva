import React from 'react';
import {connect} from 'dva';
import TodoItem from './TodoItem';

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.onInput = this.onInput.bind(this);
  }

  onInput(ev){
    this.text = ev.target.value;
  }

  render(){
    const itemArr = [];
    this.props.todoList.forEach((v)=>{
      itemArr.push(<TodoItem key = {v.id} id ={v.id} text ={v.text} completed = {v.completed}/>)
    });
    return(
      <div>
        <input onInput={this.onInput} placeholder="输入代办事项"/><button onClick={()=>{this.props.addItem(this.text)}}>Add</button>
        <ul>
          {itemArr}
        </ul>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    todoList: state.todo
  }
};

const mapDispatch = (dispatch)=> {
  return {
    addItem: (text) => { dispatch({type:'todo/addItem',text:text})}
  }
};

export default connect(mapState,mapDispatch)(Todo);
