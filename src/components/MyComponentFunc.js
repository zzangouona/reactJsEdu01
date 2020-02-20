import React from 'react';

const MyComponentFunc = ({name, getnum}) => {
    return(
        <div>
            <h2>I'm 함수형 컴포넌트 {name}  / {getnum}</h2>
        </div>
    )
}



export default MyComponentFunc;