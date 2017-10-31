import React from 'react';
import {connect} from 'dva';
import style from './example.css';

/**
 * 编写无状态组件
 * **/
const CountApp = ({count, add, minus,addAsync}) => {

  return (
    <div className={style.container}>
      <h2 className={style.record}>Highest Record:{count.record}</h2>
      <hr/>
      <div className={style.current}>{count.current}</div>
      <button className={style.btn} onClick={addAsync}>+ Async</button>
      <button className={style.btn} onClick={add}>+ Sync</button>
      <button className={style.btn} onClick={minus}>- Sync</button>
    </div>
  );
};

const mapState = (state) => {

  return {
    count: state.count
  }
};

const mapDispatch = (dispatch) => {
  return {
    add: (count) => {
      dispatch({type: 'count/add'})
    },
    minus: (count) => {
      dispatch({type: 'count/minus'})
    },
    addAsync: (count) => {dispatch({type:'count/addAsync'})
  }
}
}
;


CountApp.propTypes = {};

export default connect(mapState, mapDispatch)(CountApp);
