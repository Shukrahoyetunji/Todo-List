import React from 'react'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import{faTrash} from '@fortawesome/free-solid-svg-icons'


const todo = (task,toggleComplete,deleteTodo,editTodo) => {
  return (
    <div className='todo'>
      <p onclick={()=>toggleComplete(task.id)}className={`${task.completed? 'Completed':''}`}>{task.task}</p>
    <div className='todo-icon'>
      <FontAwesomeIcon icon={faPenToSquare} onClick = {() => editTodo(task.id)}/> 
      <FontAwesomeIcon icon={faTrash} onClick = {() => deleteTodo(task.id)}/> 
    </div>
    </div>
  )
}

export default todo