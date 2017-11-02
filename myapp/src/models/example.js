import key from 'keymaster'

const storage = window.localStorage;
const storageRecord = storage.getItem('record');

export default {

  namespace: 'count', //  namespace is the key where model state is in ** global state **

  state: {
    record: storageRecord !== undefined ? storageRecord :0,
    current: 0,
  },

  // 注册事件
  subscriptions: {
    keyboardWatcher({dispatch}){
      key('alt+up,ctrl+up ', () => { dispatch({type:'add'})});
      key('alt+down, ctrl+down', () => { dispatch({type:'minus'})})
    }

  },

  reducers: {
    add(state, action) {
      const newCurrent = state.current + 1;

      if(newCurrent > state.record ){
        storage.setItem('record', newCurrent);
      }
      return {
        ...state, record: newCurrent > state.record ? newCurrent : state.record
        , current: newCurrent
      }

    },
    minus(state) {
      const newCurrent = state.current -1;

      return {
        ...state, current:newCurrent
      }

    },

  },
  /**
   *  看下 soga 进一步整理下异步的处理逻辑
   * **/
  effects: {
    // TODO generator 补补补概念 MDN ！！！
    *addAsync(action, { call, put }) {
      yield call(delay, 1000); // 1秒后触发 add
      yield put({ type: 'add' });
    },
  },

};

function delay(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
