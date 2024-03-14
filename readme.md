// useref
// it preserve value between render
// updating useref doesnt trigger rerender
// used to access DOMNode
// const refContainer = useRef(defaultVal)
// refContainer is an object
// set ref attribute equal to refContainer

# Context API

- Import {createContext} from 'react
- Create a context and export it
  ` export const NavBarContext = createContext()`
- Wrap <NavBarContext.provider> in the parent component
- Use the value attibute to pass the props
- ` return (
  <NavBarContext.Provider value={{ user, logout}}>
    <nav className="navbar">
      <h5>Context API</h5>
      <NavLinks />
    </nav>
  </NavBarContext.Provider>
)`

- In the component where we want to use the value. Import NavBarContext from the componenet where we define it. Also import the { useContext } from 'react';
- Craeta a variable and pass NavBarContext to useContext
- ` const context = useContext(NavBarContext);`
- use context object to access the value

## Global Context API

### Use Reducer

- Import the use reducer hook
- Invoke the userreducer hook and pass a default state and reducer(function that maniplate the state) useReducer(reducer , DefaultState)
- It return state and dispathc
  ` [state , dispatch] = useReducer(reducer , DefaultState)`

- dispatch: Invoke and pass action. Action will be hanlde in reducer
  dispatch({type:'action_type'})
  dispatch({type:'CLEAR_LIST'})

- Reducer handler hanle the action. It has state(before the updtae) and action
  Whatever we retuen from reducer is our new state value
