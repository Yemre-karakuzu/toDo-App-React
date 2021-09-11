import { useState } from 'react'
import Header from './Header/HeaderIndex'
import Footer from './Footer/FooterIndex'
import Cards from './Cards/CardIndex'

function MainIndex() {
    const [todo,setTodo]=useState([
        {
				"done": true,
				"text": "Taste JavaScript"
			},
			{
				"text": "Code furiously",
				"done": true
			},
			{
				"text": "Promote Mavo",
				"done": false
			},
			{
				"text": "Give talks",
				"done": false
			},
			{
				"text": "Write tutorials",
				"done": true
			},
			{
				"text": "Have a life!",
				"done": false
			}
    ]);
    return (
        <div>
            <Header  todo={todo} addTodo={setTodo}/>
            <Cards todo={todo} addTodo={setTodo} />
            <Footer/>
        </div>
    )
}

export default MainIndex
