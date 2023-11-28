import React, { useState } from 'react';

function TodoList(props){
    const [inputText, setInputText] = useState('');
    return(
        <li className='list-item'>
            {props.item}
            <span className='icons'><i className="fa-solid fa-trash-can icon-delete"
            onClick={e =>{
                props.deleteItem(props.index);
            }}></i></span>
        </li>
    )
}

export default TodoList;