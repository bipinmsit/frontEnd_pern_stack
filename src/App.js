import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import InputTodo from './InputTodo'
import ListTodo from './ListTodo'

const App = () => {
    return(
        <>
            <div className="container">
                <InputTodo />
                <ListTodo />
            </div>
        </>
    )
}
export default App