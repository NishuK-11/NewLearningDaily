import { createContext,useState } from "react";
import childA from "./components/childA"


//step1 :- create context
const UserContext = createContext();
//step2:- wrap all the child inside a provider
//step3:- paas value
//step 4:- consumer k andar jaake consume krlo

function App(){
    const [user,setUser]= useState({name:"Love"});
    return(
        <>
        <UserContext.Provider>
            <childA />
        </UserContext.Provider>
        </>
    )
}
export default App;
export  {UserContext}

//childA k andar childB ke andar childC


//ChildC
import React from 'react'
import { useContext } from "../App";

const Childc = () => {
    const user = useContext(UserContext);
  return (
    <div>Data:{user.name}</div>
  )
}

export default Childc