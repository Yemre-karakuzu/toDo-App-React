// import {useState} from 'react'

function CardIndex({todo,addTodo}) {
    // const [newtodo,setNewTodo]=useState({done:false,text:""});
    const allCheckedBtn =()=>{
        todo.map((item)=>
            item.done=true
        )
    }
    const deleteTodo=(index)=>{
        const newTodos = [...todo];
        newTodos.splice(index, 1);
        addTodo(newTodos)
    }
    const checkedTodo=(index)=>{
        const newTodos = [...todo];
        newTodos[index].done = !newTodos[index].done;
        addTodo(newTodos);
    }
    return (
        <div className="main">
        <input property="toggleAll" id="toggle-all" className="toggle-all" type="checkbox" checked="[todoLeft = 0]"/>
		<label htmlFor="toggle-all" onClick={()=>allCheckedBtn}>
			Mark all as complete
		</label>
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
