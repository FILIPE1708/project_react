import './InputText.css';
import React from 'react';
import {Input} from "reactstrap";

const InputText = (props) => {

    const onInput = (e) => {
        props.onInput(e.target.value)
    }

    return (
        <div className="input-text">
            <Input value={props.valor}
                    onChange={onInput} 
                    type="text" 
                    placeholder={props.placeholder}/>
        </div>
    );
}

export default InputText;