import {useState} from 'react'

function CardIndex({todo,addTodo}) {
    const [newtodo,setNewTodo]=useState({done:false,text:""});
    const allCheckedBtn =()=>{
        todo.map((item)=>
            item.done=true
        )
    }
    return (
        <div className="main">
        <input property="toggleAll" id="toggle-all" className="toggle-all" type="checkbox" checked="[todoLeft = 0]"/>
		<label htmlFor="toggle-all" onClick={allCheckedBtn}>
			Mark all as complete
		</label>
        <ul className="todo-list">
            {                
                todo.map((element,i) => {
                    return <li className={(todo.done ? "completed " : "")} mv-multiple="todo" key={i}>
                        {  
                        <div className="view">
					        <input property="done" className="toggle" type="checkbox"/>
					        <label property="text">{element.text}</label>
					        <button className="destroy" mv-action="delete(todo)"></button>
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
