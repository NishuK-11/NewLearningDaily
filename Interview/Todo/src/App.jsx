import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'
export default function App() {
  //Todoprovider taki uske andar set kr ske

  const [todos,setTodos] = useState([])

  const addTodo =(todo)=>{
    //purani wala delte na ho isliye hmei iske pichhle state ko store krana hoga

    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=>todo.id!==id))
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id?{...prevTodo, completed:!prevTodo.completed}:prevTodo))
  }

  //localstorage
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo,deleteTodo,toggleComplete}}>
        <div className="bg-[#172842] min[h-screen py-8">
          <div className='w-full max-w-2xl max-auto shadow-md rounded-lg px-4 py-3 text-white'>
            <h1>Manage your todos</h1>
          </div>
          <div className='mb-4'> 
            //todo loop 
            <TodoForm />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            //loop and add todoItem 
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
      </div>
    </TodoProvider>
    
  );
}

