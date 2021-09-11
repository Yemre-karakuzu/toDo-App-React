import { useState } from 'react'
import Todostore from '../../store/store'
function FooterIndex({todo,addTodo}) {
	const [activeFilter,setActiveFilter]=useState("all");
	const filteredActive=()=>{
		var filterTodo=[...Todostore]
		setActiveFilter("active");
		filterTodo=filterTodo.filter((element)=>{
			 return element.done===false;
		})
		console.log(filterTodo);
		addTodo(filterTodo)
	}
	const filteredcompleted=()=>{
		var filterTodo=[...Todostore]
		setActiveFilter("completed");
		filterTodo=filterTodo.filter(element=>{
			return element.done===true;
		})
		addTodo(filterTodo)
	}
	const filteredAll=()=>{
		setActiveFilter("all");
		addTodo(Todostore) 
	}
    return (
        <div className="footer">
            <ul className="filters">
			<li>
				<button className={ activeFilter==="all" ? "selected" : "" }
					onClick={filteredAll}>All</button>
			</li>
			<li>
				<button className={ activeFilter==="active" ? "selected" : "" }
					onClick={filteredActive}>Active</button>
			</li>
			<li>
				<button className={ activeFilter==="completed" ? "selected" : "" }
					onClick={filteredcompleted}> Completed </button>
			</li>
		</ul>
        <button hidden="[todoDone = 0]"
				  className="clear-completed"
				  mv-action="delete(todo where done)">
			Clear completed
		</button>
        <footer className="info">
	        <p>Click to edit a todo</p>
	        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
        </div>
    )
}

export default FooterIndex
