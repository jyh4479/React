import React from 'react'

const Children = props => {

    const keyFunction = props.keyFunction

    const onClick = () => {
        console.log(typeof(keyFunction) + ' type check ')

        const keys = Object.keys(keyFunction)
        keys.forEach(key=> {
            keyFunction[key]();
        })
    }

    return (
        <>
            <div>props 테스트</div>
            <button onClick={onClick}>콘솔버튼</button>
            <button onClick={()=>{keyFunction.onClickA(); keyFunction.onClickB()}}>A버튼</button>
            <button onClick={keyFunction.onClickB}>B버튼</button>
        </>
    )
}

export default Children