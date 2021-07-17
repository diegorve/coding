import reactDom from "react-dom"
import CreateTodo from "./Todo/Todos"



const App = () => {
    return (
        <CreateTodo />
    )
}


reactDom.render(
    <App />,
    document.getElementById('root')
);