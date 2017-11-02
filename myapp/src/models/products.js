import dva from 'dva';

let nextId = 0;
export default {
  namespace:'products',
  state:[],
  reducers:{
    onDelete(state, action){

      return state.filter((v)=>{
        return v.id !== action.id
      })
    },
    onAdd(state, action){
      if(!action.text.trim()){
        return state;
      }
      return [{
        id: nextId++,
        name:action.name,
      },...state]
    }
  }
}
