import {useState} from 'react'

function HeaderIndex({ todo,addTodo}) {
    const [newtodo,setTodo]=useState({done:false,text:""});
    const onSubmit =(e) =>{
        e.preventDefault();
        addTodo([...todo,newtodo])
        setTodo({done:false,text:""});
    }
    const onChangeInput=(e) =>{
        setTodo({...newtodo,[e.target.name]:e.target.value});
    }
    return (
        <div  className="header" >
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChangeInput} name="text"  value={newtodo.text} className="new-todo" placeholder="What needs to be done?" autoFocus/>
            </form>
        </div>
    )
}

export default HeaderIndex
