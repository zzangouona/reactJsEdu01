import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        const {name} = this.props;

        return (
            <div>
                {/* <h1>내 이름은 {this.props.name}</h1> */}
                <h1>내 이름은 {name}</h1>
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name : "디폴트값"
};

export default MyComponent;//다른 파일에 import 시키기 위해 허용해준다.