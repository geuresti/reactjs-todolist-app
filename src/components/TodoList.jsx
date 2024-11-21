import React from 'react'
import TodoCard from './TodoCard.jsx'

export default function TodoList(props) {

    // destructure 'todos' from props (passed from App.jsx)
    const {todos, handleDeleteTodo} = props

    // Can destructure all the props OR just pass the props
    //  along to the next component (see <TodoCard...>)

    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}