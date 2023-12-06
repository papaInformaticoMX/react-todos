import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return (
        <h1>
            Has complicado {completed} de {total} TODOS
        </h1>
    )
}

export { TodoCounter }