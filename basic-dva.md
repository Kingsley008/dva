basic-dva vs redux
--
Dva is data Manager based on Redux produced by Ali.
This is my notes of demo in [dva](https://github.com/dvajs/dva/blob/master/docs/GettingStarted.md "get started") 

I will try to introduce dva with redux 

* In Redux we will usually define Store, action, reducer in a Component, it seems 
very complex and unfriendly for green hand. We know that Store just like a model.
however, there is a question, when we write asynchronous logic in reducer there is 
huge work to write actionType in render() to judge the status of asynchronous request.

```jsx harmony
     render(){
            switch (this.props.status){
                case Status.LOADING:{
                   return(
                      <div> loading</div>
                   )
                }
    
                case Status.SUCCESS:{
                    return(
                             <div> success </div> 
                                      )
                }
    
                case Status.FAILURE:{
                    return(
                              <div> fail </div>
                                      )
            }
    
        }
```  

Model
--
in Dva we write all logical idea in Model, we can see that dva help us defined namespace in global state (store);
* state:  help us initiate Model state 
* subscriptions: idea from  elm 0.17.  eg. you can register key-broad event here and dispatch certain action by key-down event
* reducer: reducer is a pure function that receive action object every time will return a new state which change the repaint in view 
* effects: idea from soga to deal with asynchronous logic 
```jsx harmony

export default {
  //  namespace is the key where model state is in ** global state **
  namespace: '', 

  state: {

  },

  subscriptions: {

  },

  reducers: {
   
  },
  
  effects: {
   
  },

};

``` 

Component
--
 in Component, it is similar in react-redux, using connect (HOC) to pass value to
 stateless component. 
 * mapStateToComponent: you can get state and  return object and map to component
 * mapDispatchToComponent: you can get pass dispatch method to component. Notice: add NameSpace when you dispatch
 action `() => {dispacth({type:'count/add'})}`
 * finally use connect to link state and component 

```jsx harmony
    const App = ({namespace})=> {
        return (
            <div>content</div>
        )
    };
    const mapState = (state, ownProps) => {};
    const mapDispatch = (dispatch, ownProps) => {};
    export default connect(mapState, mapDispatch)(App)
```

Router 
--
we can use router and dynamic import and link Component and Model 