import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    state = {
        number: 0,
        message: ""
    }

    //handleIncrease 함수
    //기능 : state.number 변수를 증가해준다.
    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    //handleDecrease 함수
    //기능 : state.number 변수를 감소해준다.
    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        const { name, value } = this.props;
        const { number, message } = this.state;
        const { handleDecrease, handleIncrease } = this;

        return (
            <div>
                {/* <h1>내 이름은 {this.props.name}</h1> */}
                <h1>내 이름은 {name}/{value}</h1>
                <p>입력된 Message 값은 {message}</p>
                <input type="text" value = {message} 
                onChange={(e)=> (this.setState({
                    message: e.target.value
                }))} />
                <p>Number 값 {number}</p>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name: "디폴트값"
};

MyComponent.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number.isRequired,
};

export default MyComponent;//다른 파일에 import 시키기 위해 허용해준다.