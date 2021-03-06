import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todos/todosSlice'
function Form() {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        if (!title) return
        dispatch(addTodo({ title }))
        setTitle("")
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="new-todo" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="What needs to be done?" autoFocus />
        </form>
    )
}

export default Form
