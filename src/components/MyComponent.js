import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    state = {
        number:0
    }
    render() {
        const {name, value} = this.props;
        const {number} = this.state;

        return (
            <div>
                {/* <h1>내 이름은 {this.props.name}</h1> */}
                <h1>내 이름은 {name}/{value}</h1>
                <p>Number 값 {number}</p>
                <button onClick={()=> {
                    this.setState({
                        number : number + 1
                    })
                }}>+</button>
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name : "디폴트값"
};

MyComponent.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired,
};

export default MyComponent;//다른 파일에 import 시키기 위해 허용해준다.