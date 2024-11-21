
import React from 'react'

export default function TodoList(props) {

    const {children, handleDeleteTodo, index, handleEditTodo} = props

    return (
        <li className='todo-item'>
            {children}
            <div className='actionsContainer'>

                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                   <p className='edit'>📝</p>
                </button>

                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <p className='delete'>❌</p>
                </button>

            </div>
        </li>
    )
}