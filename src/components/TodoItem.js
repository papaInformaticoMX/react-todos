function TodoItem({text, completed}){
    const complete = ()=>{
        
    }
    return (
        <li className={completed? 'completed':'' }>
            <p>
            <span  class="linkTerminar" onClick={complete}>{completed? 'completada': 'completar'}</span>
            {text}
            <span class="linkEliminar" title="Eliminar">X</span>
            </p>
        </li>
    )
}

export { TodoItem }