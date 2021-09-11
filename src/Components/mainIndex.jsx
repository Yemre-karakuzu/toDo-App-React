import { useState } from 'react'
import Header from './Header/HeaderIndex'
import Footer from './Footer/FooterIndex'
import Cards from './Cards/CardIndex'
import TodoStore from '../store/store'

function MainIndex() {
    const [todo,setTodo]=useState(
       TodoStore
    );
    return (
        <div>
            <Header  todo={todo} addTodo={setTodo}/>
            <Cards todo={todo} addTodo={setTodo} />
            <Footer  addTodo={setTodo} />
        </div>
    )
}

export default MainIndex
