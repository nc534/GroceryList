import React, {Component} from 'react';

export default class QuantityCounter extends Component {

    state = {
        quantity: 1,
    }

    
    increment = () => {
        this.setState(prevState => ({
            quantity: prevState.quantity + 1,
        }));
    }

    decrement = () => {
        if(this.state.quantity > 1){
            this.setState(prevState => ({
                quantity: prevState.quantity - 1,
            }));
        }
    }

    render() {
        return(
            <div>
                <td><button onClick={this.decrement}>-</button></td>
                <td>{this.state.quantity}</td>
                <td><button onClick={this.increment}>+</button></td>
            </div>
        )
    }

}