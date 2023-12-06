function TodoItem(props){
    const complete = ()=>{
        
    }
    return (
        <li className={props.completed? 'completed':'' }>
            <p>
                <span
                    className="linkTerminar" 
                    onClick={props.onComplete}>
                        {props.completed? 'completada': 'completar'}
                </span>
                {props.text}
                <span
                    onClick={props.onDelete}
                    className="linkEliminar"
                    title="Eliminar">
                        X
                </span>
            </p>
        </li>
    )
}

export { TodoItem }