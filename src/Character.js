import React from 'react';
import './App.css';

const Character = props => {
    const { char } = props;

    return (
        <div className='charCard'>
            <h1>{char.name}</h1>

        </div>
    )
}

export default Character;