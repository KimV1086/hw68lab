import axiosOrders from "../axios-orders";

export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_ERROR = 'FETCH_TODO_ERROR';

export const fetchTodoRequest = () => {
    return {type: FETCH_TODO_REQUEST};
};

export const fetchTodoSuccess = task => {
    return {type: FETCH_TODO_SUCCESS, task};
};

export const fetchTodoError = () => {
    return {type: FETCH_TODO_ERROR};
};


export const fetchTodo = () => {
    return async dispatch => {
        try {
            dispatch(fetchTodoRequest());
            let response = await axiosOrders.get('/tasks.json');
            dispatch(fetchTodoSuccess(response.data));
        } catch (e) {
            dispatch(fetchTodoError());
        }

    }
};
export const saveTask = (task) => {
    return async (dispatch) => {
        try {
            await axiosOrders.post('/tasks.json', task);
            dispatch(fetchTodo());
        } catch (e) {
            dispatch(fetchTodoError());
        }

    }
};

export const removeTask = (id) => {
    return async (dispatch) => {
        try {
            await axiosOrders.delete('tasks/' + id + '/.json');
            dispatch(fetchTodo());
        } catch (e) {
            dispatch(fetchTodoError());
        }
    }
};
