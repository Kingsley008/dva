import React from 'react';
import {connect} from 'dva';
import style from './todo.css';

const TodoItem = ({toggle, remove,completed,text,change})=> {
    return (
      <li className={completed? style.line:''}>
        <input type="checkbox" onClick={toggle}/>
        {text}
        <button onClick={remove}>X</button>
      </li>
    )
};

const mapDispatch = (dispatch,ownProps) => {
  return {
    toggle:()=>{ dispatch({type:'todo/toggleItem',id:ownProps.id})},
    remove:()=>{ dispatch({type:'todo/removeItem',id:ownProps.id})},
    change:()=>{ dispatch({type:'todo/changeItem',id:ownProps.id})}
  }
};

export default connect(null,mapDispatch)(TodoItem);
