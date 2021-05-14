import React from 'react';
import styled from "styled-components";



const ImageButton = props => {

    const Button = styled.button`
      display: inline-block;
      background: #EEE;
      border-radius: 4px;
      border: none;
      color: black;
      font-weight: 600;
      font-size:12px;
      font-family:sans-serif;
      padding: 0.5em 1.5em;
      transition: all 0.6s;
      
      &:hover{
        background-color: ${props.hoverBgColor || '#ffea97'};
      }
      &:checked{
        background-color: #fddc57;
      }
    `

    return(
        <>
            <Button className={props.addClassName} data-filter={props.addDataFilter}>{props.buttonName}</Button>
        </>
    )
}

export default  ImageButton;