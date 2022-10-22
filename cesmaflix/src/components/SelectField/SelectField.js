import React from 'react';
import {Input} from "reactstrap";

const SelectField = (props) => {
    return (
        <Input type="select" name="select" id="exampleSelect">
            {props.options.map(option => {
                return (
                    <option key={option}>{option}</option>
                )
            })}
        </Input>
    )
}

export default SelectField;