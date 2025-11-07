the store is where Redux keeps all your app's data. 
it's like a database for your app. but it's only for managing data in memory (not saving it permanently).


REDUX STORE -Syntax
import {createStore} from "redux"
const store = createStore(reducer)

the createStore method creates the redux store using a reducer function that handles how the state changes in response to actions .


Dispatch an action 
dispatchEvent() is used to send actions to redux store. Action describes what change you to make to the state (such as adding a task).

store.Dispatch({type:"ACTION_TYPE",payload:data});
dispatch() is used to send actions to the redux store. an action describes what change you want to make to the state(such as adding a task).

getState()
getstate() retrieves the current state of the redux store. 
this is useful for accessing the state after it has been updated or to monitor changes. 
getState()
//it is useful concept ok done
