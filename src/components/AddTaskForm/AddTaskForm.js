import React from 'react';
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

function AddTaskForm(props) {
    return (
        <form onSubmit={props.click}>
            <InputGroup>
                <Input value={props.value} onChange={props.change} placeholder={props.placeholder}/>
                <InputGroupAddon addonType="append">
                    <Button type="submit" color="secondary">{props.text}</Button>
                </InputGroupAddon>
            </InputGroup>
        </form>
    );
}
export default AddTaskForm;