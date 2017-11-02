import key from 'keymaster'

const storage = window.localStorage;
const storageTodos = storage.getItem('todos');
let nextId = 0;

export default {
  namespace:'todo',
  state:[],
  reducers:{
    addItem(state,action) {
      if(!action.text.trim()){
        return state;
      }

      return [
        {
          id:nextId++,
          text:action.text,
          completed:false
        }
        , ...state
      ]
    },
    removeItem(state, action) {
      return state.filter((v)=>{
        return v.id !== action.id
      })
    },
    toggleItem(state, action) {
      return state.map((v)=>{
        if(action.id === v.id ){
          return {...v, completed: !v.completed} // 纯函数
        } else {
          return v;
        }
      })
    },
    changeItem(state, action) {
      state.map((v) => {
        if(action.id === v.id ){
          return {...v, text:action.text};
        } else {
          return v;
        }
      })
    }

  }
}
