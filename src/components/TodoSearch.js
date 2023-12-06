import React from "react";

function TodoSearch({searchValue, setSearchValue}){
    const setSearchValueFnc = (event)=>{
        setSearchValue(event.target.value);
    }
    return (
        <input
        placeholder="Search"
        value={searchValue}
        onChange={setSearchValueFnc}
         />
    )
}

export { TodoSearch }