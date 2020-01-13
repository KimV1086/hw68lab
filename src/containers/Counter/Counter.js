import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Counter.css'
import {addCounter, decrementCounter, fetchCounter, incrementCounter, subtractCounter} from "../../store/actionCounter";
import Spinner from "../../components/UI/Spinner/Spinner";

class Counter extends Component {
    componentDidMount() {
        this.props.fetchCounter();
    }

    render() {
        return (
            <div className='Counter'>
                <h1>{this.props.loading ? <Spinner/> : this.props.counterThis}</h1>
                <button onClick={this.props.incrementCounter}>Inc</button>
                <button onClick={this.props.decrementCounter}>Dec</button>
                <button onClick={this.props.subtractCounter}>Dec by 5</button>
                <button onClick={this.props.addCounter}>Inc by 5</button>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        counterThis:state.counter,
        loading:state.loading
    }
};

const mapDispatchToProps = dispatch =>{
   return{
       incrementCounter: () => dispatch(incrementCounter()),
       decrementCounter: () => dispatch(decrementCounter()),
       addCounter: () => dispatch(addCounter(5)),
       subtractCounter: () => dispatch(subtractCounter(5)),
       fetchCounter: () => dispatch(fetchCounter())
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
