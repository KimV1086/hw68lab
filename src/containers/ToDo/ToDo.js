import React, {Component, Fragment} from 'react';
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import {connect} from "react-redux";
import {fetchTodo, removeTask, saveTask} from "../../store/actionToDoList";
import Task from "../../components/Task/Task";
import Spinner from "../../components/UI/Spinner/Spinner";

class ToDo extends Component {
    state = {
        taskText: '',
    };

    componentDidMount() {
        this.props.getTasks();
    }

    inputChangeHandler = (event) => this.setState({taskText: event.target.value});
    addTask = (event) => {
        event.preventDefault();
        const task = {text: this.state.taskText};
        this.props.addOneTask(task);
    };

    render() {
        let tasks = this.props.tasks.map((task, index) => {
            return <Task removeClick={() => this.props.remove(task.id)} key={task.id} id={index} taskText={task.text}/>
        });
        let content = <Fragment>
            <AddTaskForm change={this.inputChangeHandler}
                         value={this.state.taskText} click={this.addTask}
                         placeholder="Add some tasks" text="Add"/>
            {tasks}
                        </Fragment>;
        if (this.props.loading) {
            content = <Spinner/>;
        }
        return (
            <div className="container">
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        tasks: state.tasks,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getTasks: () => dispatch(fetchTodo()),
        addOneTask: (task) => dispatch(saveTask(task)),
        remove: (id) => dispatch(removeTask(id)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
