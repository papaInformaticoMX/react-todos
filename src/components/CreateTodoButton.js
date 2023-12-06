import React from "react";
function CreateTodoButton({todos, setTodos}){
    return (
        <>
        <button onClick={(event)=>{
            const todo = prompt("");
            if(todo != ""){
                setTodos([...todos, {text: todo, completed: false}]);
            }
        }}>+</button>
        </>
        
    )
}

export { CreateTodoButton }