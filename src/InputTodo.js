import React, {useState} from 'react'

const InputTodo = () => {
    const [description, setDescription] = useState("")

    const inputEvent = (e) => {
        // console.log(e.target.value)
        setDescription(e.target.value)
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try{
            const body = {description}
            const response = await fetch("http://localhost:5000/todos", {
                method:"POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/"
            // console.log(response)
        }catch(err) {
            console.log(err.message)
        }
    }
    return(
        <>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={inputEvent} placeholder="Enter description" />
                <button className="btn btn-success">Add</button>
            </form>
        </>
    )
}

export default InputTodo