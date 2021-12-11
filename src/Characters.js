import React from 'react';
import './App.css';
import Character from './Character';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    align-items: center;
`

const Characters = (props) => {
    const { characters } = props;

    return (
        <StyledDiv>
            {
                characters.map(char => {
                    console.log(char);
                    return <Character char = {char} />
                })
            }
        </StyledDiv>
    );
};

export default Characters;