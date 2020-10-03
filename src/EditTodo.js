import React, {useState} from 'react'

const EditTodo = (props) => {
    const [description, setDescription] = useState(props.todo.description)
    // console.log(props.todo.description)

    const inputEvent = (e) => {
        setDescription(e.target.value)
    }
    // Edit description function
    const updateDescription = async (e) => {
        e.preventDefault()
        try{
            const body = {description}
            const response = await fetch(`http://localhost:5000/todos/${props.todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/"
        }catch(err){
            console.error(err.message)
        }
    }
    return (
        <>

        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${props.todo.todo_id}`}>
        Edit
        </button>


        <div className="modal" id={`id${props.todo.todo_id}`} onClick={() => setDescription(props.todo.description)}>
        <div className="modal-dialog">
            <div className="modal-content">


            <div className="modal-header">
                <h4 className="modal-title">Edit Todo</h4>
                <button type="button" className="close" data-dismiss="modal"> onClick={() => setDescription(props.todo.description)} </button>
            </div>


            <div className="modal-body">
                <input type="text" className="form-control" value={description} onChange={inputEvent} />
            </div>


            <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={(e) => updateDescription(e)}>Edit</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(props.todo.description)}>Close</button>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default EditTodo