import React, { useState } from 'react'
import { useTodo } from '../contexts'

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const saveEdit = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  return (
    <div
      className={`flex items-center gap-x-3 rounded-lg px-3 py-2 text-black
      ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      <input
        type="text"
        className={`flex-1 bg-transparent outline-none
        ${todo.completed ? "line-through" : ""}
        ${isTodoEditable ? "border px-2" : "border-none"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        onClick={() => {
          if (todo.completed) return
          isTodoEditable ? saveEdit() : setIsTodoEditable(true)
        }}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </div>
  )
}

export default TodoItem
