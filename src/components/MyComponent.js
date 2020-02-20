import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    state = {
        number: 0,
        message: "",
        username:"",
        names :  ["Angular","Vue","React","Ember"]
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

    //handleChange 함수
    // 기능 : input과 state를 관리한다.
    handleChange = (e)=> {(this.setState({
        [e.target.name] : e.target.value
    }))}

    //handleEnter 함수
    //기능 : message input에 엔터를 치면 username input 에 forcus가 된다.
    handleEnter = (e) => {
        if(e.key == 'Enter'){
            //clear
            this.setState({
                names:this.state.names.concat(this.state.message),
                message : ''
            })
            //this.myUser.focus();
        }
    }

    render() {

        const { name, getnum } = this.props;
        const { number, message, username, names } = this.state;
        const { handleDecrease, handleIncrease, handleChange, handleEnter } = this;

        //const names = ["Angular","Vue","React","Ember"];
        const nameList = names.map((num, i)=>(<li key={i}>{num}</li>))

        return (
            <div>
                {/* <h1>내 이름은 {this.props.name}</h1> */}
                <h1>내 이름은 {name}/{getnum}</h1>
                <p>입력된 Message 값은 {message}</p>
                Message : <input type="text" name ="message" value = {message} onChange={handleChange} onKeyPress={handleEnter} /><br/>
                {/* UserName : <input type="text" name="username" value={username} onChange={handleChange} ref={(ref)=> (this.myUser=ref)} /> */}
                <ul>
                {nameList}
                </ul>
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
    getnum: PropTypes.number.isRequired,
};

export default MyComponent;//다른 파일에 import 시키기 위해 허용해준다.