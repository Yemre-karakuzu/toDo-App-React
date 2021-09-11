function CardIndex({todo,addTodo}) {
    const deleteTodo=(index)=>{
        const newTodos = [...todo]
        newTodos.splice(index, 1)
        addTodo(newTodos)
    }
    const checkedTodo=(index)=>{
        const newTodos = [...todo]
        newTodos[index].done = !newTodos[index].done
        addTodo(newTodos)
    }
    return (
        <div className="main">
        <ul className="todo-list">
            {                
                todo.map((element,i) => {
                    return <li className={ element.done ? "completed" : "" }  key={i}>
                        {  
                        <div className="view">
					        <input property="done" onClick={()=>checkedTodo(i)} className="toggle" type="checkbox"/>
					        <label property="text">{element.text}</label>
					        <button className="destroy" onClick={()=>deleteTodo(i)}></button>
				        </div>                      
                        }
                    </li>
                })
            }
        </ul>
        </div>
    )
}

export default CardIndex
