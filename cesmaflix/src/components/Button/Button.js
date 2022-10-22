import React from "react";
import {Button} from "reactstrap";

const ButtonP = (props) => {
    return (
        <Button color="primary" className='mt-3'>
            {props.children}
        </Button>
    )
}

export default ButtonP;