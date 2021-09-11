import React from 'react'

function FooterIndex() {
    return (
        <div className="footer">
            {/* <ul className="filters">
			<li>
				<a className="[if(activeFilter = 'all', 'selected')]"
					mv-action="set(activeFilter, 'all')">All</a>
			</li>
			<li>
				<a className="[if(activeFilter = 'active', 'selected')]"
					mv-action="set(activeFilter, 'active')">Active</a>
			</li>
			<li>
				<a className="[if(activeFilter = 'completed', 'selected')]"
					mv-action="set(activeFilter, 'completed')">Completed</a>
			</li>
		</ul>
        <button hidden="[todoDone = 0]"
				  className="clear-completed"
				  mv-action="delete(todo where done)">
			Clear completed
		</button> */}
        <footer className="info">
	        <p>Click to edit a todo</p>
	        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
        </div>
    )
}

export default FooterIndex
