import {ADD, DECREMENT, FETCH_COUNTER_REQUEST, FETCH_COUNTER_SUCCESS, INCREMENT, SUBTRACT} from "./actionCounter";
import {FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS} from "./actionToDoList";

const initialState = {
    counter: 0,
    loading: false,
    tasks: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + 1};
        case DECREMENT:
            return {...state, counter: state.counter - 1};
        case ADD:
            return {...state, counter: state.counter + action.amount};
        case SUBTRACT:
            return {...state, counter: state.counter - action.amount};
        case FETCH_COUNTER_REQUEST:
            return {...state, loading: true};
        case FETCH_COUNTER_SUCCESS:
            return {...state, counter: action.counter, loading: false};
        case FETCH_TODO_REQUEST :
            return {...state, loading: true};
        case FETCH_TODO_SUCCESS :
            if(action.task){
                let taskList = Object.keys(action.task).map(key => {
                    return {...action.task[key], id: key}
                });
                return {...state, tasks: taskList, loading: false};
            }
            return {...state, tasks: [], loading: false};
        default:
            return state;

    }
};
export default reducer;
