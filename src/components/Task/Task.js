import React from 'react';
import {Button, Input, Toast, ToastBody, ToastHeader} from 'reactstrap';
import './Task.css';


function Task(props) {
    return(
        <div className="p-1 bg-transparent my-2 rounded row justify-content-center">
            <Toast>
                <Input id="checkbox"  type="checkbox" checked={props.condition}/>
                <ToastHeader>
                    {props.id}
                </ToastHeader>
                <ToastBody className="task-body">
                    {props.taskText}
                </ToastBody>
            </Toast>
            <Button onClick={props.removeClick} color="secondary" className="btn-form">Remove</Button>
        </div>
    )
}
export default Task;
