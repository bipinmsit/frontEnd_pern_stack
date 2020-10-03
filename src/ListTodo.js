import React, {useEffect, useState} from 'react'
import EditTodo from  './EditTodo'

const ListTodo = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
    }, [])
    console.log(todos)
    const getTodos = async () => {
        try{
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodos(jsonData)
        }catch(err){
            console.error(err.message)
        }
    }

    // Delete todo
    const deleteTodo = async (id) => {
        try{
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method:"DELETE"
            })
            setTodos(todos.filter((todo) => {
                return(
                    todo.todo_id !== id
                )
            }))
        }catch(err){
            console.error(err.message)
        }
    }
    return(
        <>
            <div className="container">
                <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => {
                    return(
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td> <EditTodo todo={todo} /> </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                {/* <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                </tr> */}
                </tbody>
            </table>
            </div>
        </>
    )
}
export default ListTodo