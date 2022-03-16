import React from 'react';
import styled from 'styled-components';
import {PAGE} from '../StrinTest';

const TestButton = styled.button`

`

const MyButton = props => {

    console.log(PAGE['test'])

    return (
        <TestButton>HIHIHI</TestButton>
    )
}

export default MyButton;