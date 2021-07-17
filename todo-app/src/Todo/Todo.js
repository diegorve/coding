const Todo = (props) => {
    const showComplete = (isComplete) => {
        return isComplete
        ? {
            textDecorationLine: 'line-througth',
            marginLeft : '20px'
        }
        : {
            marginLeft: '20px'
        }
    }

    return (
        <div>
            <button
                type = "button"
                style = {{marginRight: "10px"}}
                onClick = { () => props.delete(props.index)}
            >
            Borrar
            </button>
            <input type = "checkbox" checked = {props.isComplete} onChange = { () => {
                props.setComplete
            }}/>
        </div>
    )
}


export default Todo