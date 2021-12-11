import React from 'react';
import './App.css';
import styled from 'styled-components';
// import Starships from './Starships';

const StyledDiv = styled.div`
    background-color: #bde0fe;
    width: 50%;
    margin: 2%;
`

const Character = props => {
    const { char } = props;

    return (
        <StyledDiv>
            <h1>{char.name}</h1>
            {/* <h3>Starships</h3>
            <Starships starships = {char.starships} /> */}
            <p>Birth Year: {char.birth_year}</p>
            <p>Gender: {char.gender}</p>

        </StyledDiv>
    )
}

export default Character;