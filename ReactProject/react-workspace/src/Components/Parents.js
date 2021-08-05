import React, {useState} from 'react'
import Children from "./Children";

const Parents = () => {

    const [valueA, setValueA] = useState(0)
    const [valueB, setValueB] = useState(0)

    const onClickA = () => {
        console.log(valueA)
        setValueA(valueA + 1)
    }

    const onClickB = () => {
        console.log(valueB)
        setValueB(valueB + 2)
    }

    return (
        <>
            <Children
                keyFunction={{onClickA, onClickB}}
            ></Children>
        </>
    )
}

export default Parents