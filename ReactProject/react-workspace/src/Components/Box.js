import React from 'react'
import './Box.scss'

const Box = () => {
    return (
        <div className={'wrapper'}>
            <div className={'box red'}></div>
            <div className={'box blue'}></div>
            <div className={'box green'}></div>
        </div>
    )
}

Box.defaultProps = {}

export default Box