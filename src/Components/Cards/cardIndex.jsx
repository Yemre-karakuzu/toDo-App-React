import TodoList from './TodoList'
import CardFooter from './CardFooter'
function CardIndex() {

    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>
                <TodoList />

            </section>
            <CardFooter />
        </>
    )
}

export default CardIndex
