import React from 'react'
function FooterIndex() {
	return (
		<footer className="info">
			<p>Click to edit a todo</p>
			<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
	)
}

export default React.memo(FooterIndex)
